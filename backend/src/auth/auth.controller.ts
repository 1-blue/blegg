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
import type { Response } from "express";

import { AuthService } from "./auth.service";

import { SignInDto } from "./dto/sign-in.dto";

import type { RequestWithUser } from "src/types/model";
import type { RequestWithOAuthUser } from "./interface/oauth.interface";

@Controller("auth")
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

  @Post("signup")
  async signUp(@Body() body: SignInDto) {
    return this.authService.signUp(body);
  }

  @UseGuards(AuthGuard("local"))
  @HttpCode(200)
  @Post("signin")
  async signIn(@Req() req: RequestWithUser, @Res() res: Response) {
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
  @HttpCode(200)
  @Post("signout")
  async signOut(@Req() req: RequestWithUser, @Res() res: Response) {
    const { provider } = req.user;

    // 카카오 로그아웃
    if (provider === "kakao") {
      const decode = this.jwtService.decode(req.cookies.accessToken);

      await this.authService.oauthKakaoSignOut(decode["oauthAccessToken"]);
    }

    // 1. "guard"로 쿠키 검사 ( jwt로 만든 인증 토큰 )
    // 2. 쿠키 내용 및 유효 기간 없애는 옵션
    const cookieOption = this.authService.getCookieForLogOut();
    // 3. 쿠키 응답 헤더에 등록
    res.setHeader("Set-Cookie", cookieOption);

    return res.json();
  }

  // ==================== google oauth ====================
  @UseGuards(AuthGuard("google"))
  @Get("google")
  async oauthGoogle() {
    //
  }

  @UseGuards(AuthGuard("google"))
  @Get("google/redirect")
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
  async oauthKakao() {
    //
  }

  @UseGuards(AuthGuard("kakao"))
  @Get("kakao/redirect")
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
}
