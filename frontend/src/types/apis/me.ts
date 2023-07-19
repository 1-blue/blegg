import type { User, Post, SimpleUser, PostRating } from "..";

/** 2023/07/07 - 로그인한 유저 정보 요청 요청 타입 - by 1-blue */
export interface ApiGetMeRequest {}
/** 2023/07/07 - 로그인한 유저 정보 요청 응답 타입 - by 1-blue */
export interface ApiGetMeResponse extends Omit<User, "id" | "password"> {}
/** 2023/07/07 - 로그인한 유저 정보 요청 핸들러 타입 - by 1-blue */
export interface ApiGetMeHandler {
  (body: ApiGetMeRequest): Promise<ApiGetMeResponse>;
}

type PostWithData = Post & {
  user: SimpleUser;
  ratingOfUsers: Pick<PostRating, "isLike" | "userIdx">[];
};

/** 2023/07/18 - 로그인한 유저가 작성한 게시글들 요청 요청 타입 - by 1-blue */
export interface ApiFindManyPostOfMeRequest {
  start?: number;
  count?: number;
}
/** 2023/07/18 - 로그인한 유저가 작성한 게시글들 요청 응답 타입 - by 1-blue */
export type ApiFindManyPostOfMeResponse = PostWithData[];
/** 2023/07/18 - 로그인한 유저가 작성한 게시글들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyPostOfMeHandler {
  (body: ApiFindManyPostOfMeRequest): Promise<ApiFindManyPostOfMeResponse>;
}

/** 2023/07/18 - 로그인한 유저가 좋아요한 게시글들 요청 요청 타입 - by 1-blue */
export interface ApiFindManyLikedPostOfMeRequest {
  start?: number;
  count?: number;
}
/** 2023/07/18 - 로그인한 유저가 좋아요한 게시글들 요청 응답 타입 - by 1-blue */
export type ApiFindManyLikedPostOfMeResponse = {
  userIdx: number;
  postIdx: number;
  isLike: boolean;
  post: PostWithData;
}[];
/** 2023/07/18 - 로그인한 유저가 좋아요한 게시글들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyLikedPostOfMeHandler {
  (
    body: ApiFindManyLikedPostOfMeRequest
  ): Promise<ApiFindManyLikedPostOfMeResponse>;
}

/** 2023/07/18 - 로그인한 유저가 싫어요한 게시글들 요청 요청 타입 - by 1-blue */
export interface ApiFindManyHatedPostOfMeRequest {
  start?: number;
  count?: number;
}
/** 2023/07/18 - 로그인한 유저가 싫어요한 게시글들 요청 응답 타입 - by 1-blue */
export type ApiFindManyHatedPostOfMeResponse = {
  userIdx: number;
  postIdx: number;
  isLike: boolean;
  post: PostWithData;
}[];
/** 2023/07/18 - 로그인한 유저가 싫어요한 게시글들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyHatedPostOfMeHandler {
  (
    body: ApiFindManyHatedPostOfMeRequest
  ): Promise<ApiFindManyHatedPostOfMeResponse>;
}
