import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

import { UserService } from "src/user/user.service";
import { AuthRepository } from "./auth.repository";

import { SignInDto } from "./dto/sign-in.dto";
import type { TokenPayload } from "./interface/token-payload.interface";
import type { OAuthUser } from "./interface/oauth.interface";

@Injectable()
export class AuthService {
  private readonly httpService: HttpService;
  private readonly jwtService: JwtService;
  private readonly authRepository: AuthRepository;
  private readonly userService: UserService;
  constructor(
    httpService: HttpService,
    authRepository: AuthRepository,
    jwtService: JwtService,
    userService: UserService,
  ) {
    this.httpService = httpService;
    this.authRepository = authRepository;
    this.jwtService = jwtService;
    this.userService = userService;
  }

  /** 2023/07/05 - 회원가입 - by 1-blue */
  async signUp(body: SignInDto) {
    try {
      await Promise.all([
        this.authRepository.isDuplicateId(body.id),
        this.authRepository.isDuplicateNickname(body.nickname),
        this.authRepository.isDuplicateSummonerName(body.summonerName),
      ]);
    } catch (error) {
      throw error;
    }

    return this.userService.createUser(body);
  }

  /** 2023/07/07 - jwt로 된 인증 쿠키 생성 옵션 얻기 - by 1-blue */
  getCookieWithToken(payload: TokenPayload) {
    const token = this.jwtService.sign(payload);

    return `accessToken=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}`;
  }

  /** 2023/07/07 - 인증 쿠키 제거 옵션 얻기 - by 1-blue */
  getCookieForSignOut() {
    return `accessToken=; HttpOnly; Path=/; Max-Age=0`;
  }

  /** 2023/07/09 - 구글 로그인 - by 1-blue */
  async oauthGoogleSignIn(user: OAuthUser) {
    return await this.authRepository.upsertOAuthUser(user);
  }
  /** 2023/07/09 - [구글 로그아웃](https://developers.google.com/identity/protocols/oauth2/web-server?hl=ko#node.js_8) - by 1-blue */
  async oauthGoogleSignOut(accessToken: string) {
    await firstValueFrom(
      this.httpService.post(
        `https://oauth2.googleapis.com/revoke?token=${accessToken}`,
      ),
    ).catch(console.error);
  }

  /** 2023/07/09 - 카카오 로그인 - by 1-blue */
  async oauthKakaoSignIn(user: OAuthUser) {
    return await this.authRepository.upsertOAuthUser(user);
  }
  /** 2023/07/09 - [카카오 로그아웃](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#unlink-request-access-token) - by 1-blue */
  async oauthKakaoSignOut(accessToken: string) {
    await firstValueFrom(
      this.httpService.post(
        "https://kapi.kakao.com/v1/user/unlink",
        {},
        { headers: { Authorization: `Bearer ${accessToken}` } },
      ),
    ).catch(console.error);
  }
}
