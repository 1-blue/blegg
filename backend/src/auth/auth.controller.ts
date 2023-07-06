import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";

import { SignInDto } from "./dto/sign-in.dto";

@Controller("auth")
export class AuthController {
  private readonly authService: AuthService;
  constructor(authService: AuthService) {
    this.authService = authService;
  }

  @Post()
  signUp(@Body() body: SignInDto) {
    return this.authService.signUp(body);
  }
}
