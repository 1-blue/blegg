import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { UserService } from "src/user/user.service";
import { AuthRepository } from "./auth.repository";

import { SignInDto } from "./dto/sign-in.dto";
import type { TokenPayload } from "./interface/token-payload.interface";

@Injectable()
export class AuthService {
  private readonly jwtService: JwtService;
  private readonly authRepository: AuthRepository;
  private readonly userService: UserService;
  constructor(
    authRepository: AuthRepository,
    jwtService: JwtService,
    userService: UserService,
  ) {
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
  getCookieWithToken(idx: number) {
    const payload: TokenPayload = { idx };
    const token = this.jwtService.sign(payload);

    return `accessToken=${token}; HttpOnly; Path=/; Max-Age=${60 * 60}`;
  }

  /** 2023/07/07 - 인증 쿠키 제거 옵션 얻기 - by 1-blue */
  getCookieForLogOut() {
    return `accessToken=; HttpOnly; Path=/; Max-Age=0`;
  }
}
