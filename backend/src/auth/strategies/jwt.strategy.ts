import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import type { Request } from "express";

import { UserService } from "src/user/user.service";

import type { TokenPayload } from "../interface/token-payload.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly userService: UserService;
  constructor(configService: ConfigService, userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => request?.cookies?.accessToken,
      ]),
      secretOrKey: configService.get("keys.jwt"),
    });

    this.userService = userService;
  }
  async validate({ idx }: TokenPayload) {
    return this.userService.findOne({ idx });
  }
}
