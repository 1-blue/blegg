import type { Post, PostRating, SimpleUser, SortBy } from "..";

type PostWithUser = Post & {
  user: SimpleUser;
};

type PostWithData = Post & {
  user: SimpleUser;
  ratingOfUsers: Pick<PostRating, "isLike" | "userIdx">[];
};

/** 2023/07/11 - 게시글 생성 요청 타입 - by 1-blue */
export interface ApiCreatePostRequest extends Pick<Post, "title" | "content"> {
  thumbnail?: string;
}
/** 2023/07/11 - 게시글 생성 요청 응답 타입 - by 1-blue */
export interface ApiCreatePostResponse extends PostWithUser {}
/** 2023/07/11 - 게시글 생성 요청 핸들러 타입 - by 1-blue */
export interface ApiCreatePostHandler {
  (body: ApiCreatePostRequest): Promise<ApiCreatePostResponse>;
}

/** 2023/07/11 - 단일 게시글 정보 요청 타입 - by 1-blue */
export interface ApiFindOnePostRequest extends Pick<Post, "idx"> {}
/** 2023/07/11 - 단일 게시글 정보 요청 응답 타입 - by 1-blue */
export interface ApiFindOnePostResponse extends PostWithData {}
/** 2023/07/11 - 단일 게시글 정보 요청 핸들러 타입 - by 1-blue */
export interface ApiFindOnePostHandler {
  (body: ApiFindOnePostRequest): Promise<ApiFindOnePostResponse>;
}

/** 2023/07/11 - 여러 게시글들 요청 타입 - by 1-blue */
export interface ApiFindManyPostRequest {
  start?: number;
  count?: number;
  sortBy?: SortBy;
  search?: string | null;
}
/** 2023/07/11 - 여러 게시글들 요청 응답 타입 - by 1-blue */
export type ApiFindManyPostResponse = PostWithData[];
/** 2023/07/11 - 여러 게시글들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyPostHandler {
  (body: ApiFindManyPostRequest): Promise<ApiFindManyPostResponse>;
}

/** 2023/07/11 - 게시글 수정 요청 타입 - by 1-blue */
export interface ApiUpdatePostRequest
  extends Partial<Pick<Post, "title" | "content" | "thumbnail">> {}
/** 2023/07/11 - 게시글 수정 요청 응답 타입 - by 1-blue */
export interface ApiUpdatePostResponse extends PostWithData {}
/** 2023/07/11 - 게시글 수정 요청 핸들러 타입 - by 1-blue */
export interface ApiUpdatePostHandler {
  (body: ApiUpdatePostRequest, idx: number): Promise<ApiUpdatePostResponse>;
}

/** 2023/07/11 - 게시글 제거 요청 타입 - by 1-blue */
export interface ApiDeletePostRequest extends Pick<Post, "idx"> {}
/** 2023/07/11 - 게시글 제거 요청 응답 타입 - by 1-blue */
export interface ApiDeletePostResponse {}
/** 2023/07/11 - 게시글 제거 요청 핸들러 타입 - by 1-blue */
export interface ApiDeletePostHandler {
  (body: ApiDeletePostRequest): Promise<ApiDeletePostResponse>;
}

/** 2023/07/13 - 게시글 좋아요 추가 요청 타입 - by 1-blue */
export interface ApiCreateRatingOfPostRequest extends Pick<Post, "idx"> {}
/** 2023/07/13 - 게시글 좋아요 추가 요청 응답 타입 - by 1-blue */
export interface ApiCreateRatingOfPostResponse {}
/** 2023/07/13 - 게시글 좋아요 추가 요청 핸들러 타입 - by 1-blue */
export interface ApiCreateRatingOfPostHandler {
  (body: ApiCreateRatingOfPostRequest): Promise<ApiCreateRatingOfPostResponse>;
}

/** 2023/07/13 - 게시글 싫어요 추가 요청 타입 - by 1-blue */
export interface ApiDeleteRatingOfPostRequest extends Pick<Post, "idx"> {}
/** 2023/07/13 - 게시글 싫어요 추가 요청 응답 타입 - by 1-blue */
export interface ApiDeleteRatingOfPostResponse {}
/** 2023/07/13 - 게시글 싫어요 추가 요청 핸들러 타입 - by 1-blue */
export interface ApiDeleteRatingOfPostHandler {
  (body: ApiDeleteRatingOfPostRequest): Promise<ApiDeleteRatingOfPostResponse>;
}
