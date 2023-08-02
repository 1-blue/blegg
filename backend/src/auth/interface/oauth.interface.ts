import { Provider } from "@prisma/client";

/** 2023/07/09 - OAuth 로그인 응답 타입 - by 1-blue */
export interface OAuthUser {
  provider: Provider;
  snsId: string;
  email: string;
  avatar: string;
  accessToken: string;
  refreshToken: string;
}

/** 2023/07/09 - OAuth 로그인 응답 타입 + Request - by 1-blue */
export interface RequestWithOAuthUser extends Request {
  user: OAuthUser;
}
