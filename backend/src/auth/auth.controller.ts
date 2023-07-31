import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
  Get,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import {
  ApiTags,
  ApiOperation,
  ApiCookieAuth,
  ApiOAuth2,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
} from "@nestjs/swagger";
import type { Response } from "express";

import { AuthService } from "./auth.service";

import { SignInDto } from "./dto/sign-in.dto";

import { ValidateUserDto } from "src/user/dto/validate-user.dto";
import type { RequestWithUser } from "src/types/model";
import type { RequestWithOAuthUser } from "./interface/oauth.interface";

@Controller("auth")
@ApiTags("Auth API")
export class AuthController {
  private readonly jwtService: JwtService;
  private readonly configService: ConfigService;
  private readonly authService: AuthService;
  constructor(
    jwtService: JwtService,
    configService: ConfigService,
    authService: AuthService,
  ) {
    this.jwtService = jwtService;
    this.authService = authService;
    this.configService = configService;
  }

  /** 2023/07/05 - 회원가입 - by 1-blue */
  @Post("signup")
  @HttpCode(201)
  @ApiOperation({
    summary: "회원가입",
    description: `회원가입 API`,
  })
  @ApiCreatedResponse({
    description: "회원가입 성공",
    schema: {
      example: {
        idx: 11,
        id: "1blue12",
        password:
          "$2b$10$43NWg.60ixm/zHURwoAieOUrsFfgcJk0ipblY0dw0fG5vIRnvbvgi",
        nickname: "나의 개발일지",
        summonerName: "나의 개발일지",
        avatar:
          "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/907.png",
        provider: "local",
        snsId: null,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 소환사 이름",
    schema: {
      example: {
        message: "존재하지 않는 소환사입니다.",
        type: "summonerName",
      },
    },
  })
  @ApiConflictResponse({
    description: "중복되는 ( 아이디 || 별칭 || 소환사 이름 )",
    schema: {
      example: {
        message: "이미 사용중인 ( 아이디 || 닉네임 || 소환사명 )입니다!",
        type: "nickname ( id || nickname || summonerName )",
      },
    },
  })
  async signUp(@Body() body: SignInDto) {
    return this.authService.signUp(body);
  }

  @UseGuards(AuthGuard("local"))
  @Post("signin")
  @ApiOperation({
    summary: "로컬 로그인",
    description: `로컬 로그인 API`,
  })
  @ApiOkResponse({
    description: `로그인한 유저 정보 반환 ( + 쿠키에 인증토큰(JWT) 첨부 ( accessToken= ) )`,
    schema: {
      example: {
        idx: 10,
        id: "1blue",
        nickname: "나의 개발일지",
        summonerName: "나의 개발일지",
        avatar:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
        provider: "local",
        snsId: null,
      },
    },
  })
  @ApiForbiddenResponse({
    description: `로그인 실패 ( 일치 ID 없음 or 비밀번호 불일치 )`,
    schema: {
      example: {
        message: "존재하지 않는 유저입니다!",
        error: "Forbidden",
        statusCode: 403,
      },
    },
  })
  async signIn(
    @Req() req: RequestWithUser,
    @Res() res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @Body() body: ValidateUserDto, // 사용하지는 않지만 swagger를 위해서 등록
  ) {
    // 1. "guard"로 id, password 검사
    // 2. jwt로 된 쿠키 생성 ( 유저식별자(idx) 첨부 )
    const cookieOption = this.authService.getCookieWithToken({
      idx: req.user.idx,
    });
    // 3. 쿠키 응답 헤더에 등록
    res.setHeader("Set-Cookie", cookieOption);

    return res.json(req.user);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post("signout")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "모든 로그아웃",
    description: `모든 로그아웃 API ( + 로그인 시 받은 쿠키 필요 ( accessToken= ) )`,
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  async signOut(@Req() req: RequestWithUser, @Res() res: Response) {
    const { provider } = req.user;

    // google || kakao 로그아웃
    if (provider === "google" || provider === "kakao") {
      const decode = this.jwtService.decode(req.cookies.accessToken);
      const oauthAccessToken = decode["oauthAccessToken"];

      // 구글 로그아웃
      if (provider === "google") {
        await this.authService.oauthGoogleSignOut(oauthAccessToken);
      }
      // 카카오 로그아웃
      if (provider === "kakao") {
        await this.authService.oauthKakaoSignOut(oauthAccessToken);
      }
    }

    // 1. "guard"로 쿠키 검사 ( jwt로 만든 인증 토큰 )
    // 2. 쿠키 내용 및 유효 기간 없애는 옵션
    const cookieOption = this.authService.getCookieForSignOut();
    // 3. 쿠키 응답 헤더에 등록
    res.setHeader("Set-Cookie", cookieOption);

    return res.json();
  }

  // ==================== google oauth ====================
  @UseGuards(AuthGuard("google"))
  @Get("google")
  @ApiOAuth2([])
  @ApiOperation({
    summary: "구글 로그인",
    description: `구글 로그인 API`,
  })
  async oauthGoogle() {
    //
  }

  @UseGuards(AuthGuard("google"))
  @Get("google/redirect")
  @ApiOAuth2([])
  @ApiOperation({
    summary: "구글 로그인 성공 후 리다이렉트",
    description: `구글 로그인 성공 후 리다이렉트 API`,
  })
  async oauthGoogleRedirect(
    @Req() req: RequestWithOAuthUser,
    @Res() res: Response,
  ) {
    const { user, accessToken } = await this.authService.oauthGoogleSignIn(
      req.user,
    );

    const cookieOption = this.authService.getCookieWithToken({
      idx: user.idx,
      oauthAccessToken: accessToken,
    });
    res.setHeader("Set-Cookie", cookieOption);

    return res.redirect(this.configService.get("callbacks.front.success"));
  }

  // ==================== kakao oauth ====================
  @UseGuards(AuthGuard("kakao"))
  @Get("kakao")
  @ApiOperation({
    summary: "카카오 로그인",
    description: `카카오 로그인 API`,
  })
  async oauthKakao() {
    //
  }

  @UseGuards(AuthGuard("kakao"))
  @Get("kakao/redirect")
  @ApiOperation({
    summary: "카카오 로그인 성공 후 리다이렉트",
    description: `카카오 로그인 성공 후 리다이렉트 API`,
  })
  async oauthKakaoRedirect(
    @Req() req: RequestWithOAuthUser,
    @Res() res: Response,
  ) {
    const { user, accessToken } = await this.authService.oauthKakaoSignIn(
      req.user,
    );

    const cookieOption = this.authService.getCookieWithToken({
      idx: user.idx,
      oauthAccessToken: accessToken,
    });
    res.setHeader("Set-Cookie", cookieOption);

    return res.redirect(this.configService.get("callbacks.front.success"));
  }

  // ==================== naver oauth ====================
  @UseGuards(AuthGuard("naver"))
  @Get("naver")
  @ApiOperation({
    summary: "네이버 로그인",
    description: `네이버 로그인 API`,
  })
  async oauthNaver() {
    //
  }

  @UseGuards(AuthGuard("naver"))
  @Get("naver/redirect")
  @ApiOperation({
    summary: "네이버 로그인 성공 후 리다이렉트",
    description: `네이버 로그인 성공 후 리다이렉트 API`,
  })
  async oauthNaverRedirect(
    @Req() req: RequestWithOAuthUser,
    @Res() res: Response,
  ) {
    const { user, accessToken } = await this.authService.oauthNaverSignIn(
      req.user,
    );

    const cookieOption = this.authService.getCookieWithToken({
      idx: user.idx,
      oauthAccessToken: accessToken,
    });
    res.setHeader("Set-Cookie", cookieOption);

    return res.redirect(this.configService.get("callbacks.front.success"));
  }
}
