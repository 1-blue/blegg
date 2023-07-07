import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";

import { UserService } from "src/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private readonly userService: UserService;
  constructor(userService: UserService) {
    super({ usernameField: "id", passwordField: "password" });

    this.userService = userService;
  }

  async validate(id: string, password: string): Promise<any> {
    const user = await this.userService.validateUser({ id, password });

    if (!user) {
      throw new UnauthorizedException("로그인후에 접근해주세요!");
    }

    return user;
  }
}
