import { PassportStrategy } from "@nestjs/passport";
import { type Profile, Strategy } from "passport-kakao";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import type { Provider } from "@prisma/client";
import type { OAuthUser } from "../interface/oauth.interface";

@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy, "kakao") {
  constructor(configService: ConfigService) {
    super({
      clientID: configService.get("ids.kakao"),
      clientSecret: configService.get("keys.kakao"),
      callbackURL: configService.get("callbacks.kakao"),
      scope: ["account_email"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    const { id, provider, photos } = profile;

    const user: OAuthUser = {
      provider: provider as Provider,
      snsId: id + "",
      // FIXME: 기본 값 정하기
      email: profile._json.kakao_account.email || "id_" + Date.now(),
      avatar: photos?.[0].value || "/images/emblem/challenger.png",
      accessToken,
      refreshToken,
    };

    return user;
  }
}
