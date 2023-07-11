export type Provider = "local" | "google" | "kakao" | "naver";

/** 2023/07/11 - 유저 타입 - by 1-blue */
export interface User {
  idx: number;
  id: string;
  password?: string | null;
  nickname: string;
  summonerName?: string | null;
  avatar: string;
  provider: Provider;
  snsId?: string | null;
}

/** 2023/07/11 - 게시글 타입 - by 1-blue */
export interface Post {
  idx: number;
  title: string;
  content: string;
  thumbnail: string;
  viewCount: number;
  createdAt: Date;
  updatedAt: Date;
  userIdx: number;
}

/** 2023/07/11 - 간단한 유저 타입 - by 1-blue */
export interface SimpleUser
  extends Pick<User, "idx" | "avatar" | "nickname" | "summonerName"> {}

/** 2023/07/11 - 게시글 + 유저 타입 - by 1-blue */
export interface PostWithUser extends Post {
  user: SimpleUser;
}
