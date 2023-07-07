import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  Res,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import type { Response } from "express";

import { AuthService } from "./auth.service";

import { SignInDto } from "./dto/sign-in.dto";

import type { RequestWithUser } from "src/types/model";

@Controller("auth")
export class AuthController {
  private readonly authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  @Post("signup")
  async signUp(@Body() body: SignInDto) {
    return this.authService.signUp(body);
  }

  @UseGuards(AuthGuard("local"))
  @HttpCode(200)
  @Post("signin")
  async signIn(@Request() req: RequestWithUser, @Res() res: Response) {
    // 1. "guard"로 id, password 검사
    // 2. jwt로 된 쿠키 생성 ( 유저식별자(idx) 첨부 )
    const cookieOption = this.authService.getCookieWithToken(req.user.idx);
    // 3. 쿠키 응답 헤더에 등록
    res.setHeader("Set-Cookie", cookieOption);

    return res.json(req.user);
  }

  @UseGuards(AuthGuard("jwt"))
  @HttpCode(200)
  @Post("signout")
  async signOut(@Request() req: RequestWithUser, @Res() res: Response) {
    // 1. "guard"로 쿠키 검사 ( jwt로 만든 인증 토큰 )
    // 2. 쿠키 내용 및 유효 기간 없애는 옵션
    const cookieOption = this.authService.getCookieForLogOut();
    // 3. 쿠키 응답 헤더에 등록
    res.setHeader("Set-Cookie", cookieOption);

    return res.json();
  }
}
