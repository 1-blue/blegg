import { Provider } from "@prisma/client";

/** 2023/07/09 - OAuth 로그인 응답 타입 - by 1-blue */
export interface OAuthUser {
  provider: Provider;
  email: string;
  nickname: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}

export interface RequestWithGoogleUser extends Request {
  user: OAuthUser;
}
