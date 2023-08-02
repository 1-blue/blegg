import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy, VerifyCallback } from "passport-google-oauth20";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Provider } from "@prisma/client";

import type { OAuthUser } from "../interface/oauth.interface";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get("ids.google"),
      clientSecret: configService.get("keys.google"),
      callbackURL: configService.get("callbacks.google"),
      scope: ["email", "profile"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const { id, provider, emails, photos } = profile;

    const user: OAuthUser = {
      provider: provider as Provider,
      snsId: id + "",
      email: emails[0].value,
      avatar: photos[0].value,
      accessToken,
      refreshToken,
    };

    done(null, user);
  }
}
