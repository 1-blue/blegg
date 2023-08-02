import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { type Profile, Strategy } from "passport-naver-v2";
import type { Request } from "express";

import type { Provider } from "@prisma/client";
import type { OAuthUser } from "../interface/oauth.interface";

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy, "naver") {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get("ids.naver"),
      clientSecret: configService.get("keys.naver"),
      callbackURL: configService.get("callbacks.naver"),
      passReqToCallback: true,
    });
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ) {
    const { id, provider, profileImage, email } = profile;

    const user: OAuthUser = {
      provider: provider as Provider,
      snsId: id + "",
      email,
      avatar: profileImage,
      accessToken,
      refreshToken,
    };

    return user;
  }
}
