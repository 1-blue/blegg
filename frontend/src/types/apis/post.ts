import type { Post, PostWithUser } from "..";

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
export interface ApiFindOnePostResponse extends PostWithUser {}
/** 2023/07/11 - 단일 게시글 정보 요청 핸들러 타입 - by 1-blue */
export interface ApiFindOnePostHandler {
  (body: ApiFindOnePostRequest): Promise<ApiFindOnePostResponse>;
}

/** 2023/07/11 - 여러 게시글들 요청 타입 - by 1-blue */
export interface ApiFindManyPostRequest {
  start?: number;
  count?: number;
}
/** 2023/07/11 - 여러 게시글들 요청 응답 타입 - by 1-blue */
export type ApiFindManyPostResponse = PostWithUser[];
/** 2023/07/11 - 여러 게시글들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyPostHandler {
  (body: ApiFindManyPostRequest): Promise<ApiFindManyPostResponse>;
}

/** 2023/07/11 - 게시글 수정 요청 타입 - by 1-blue */
export interface ApiUpdatePostRequest
  extends Partial<Pick<Post, "title" | "content" | "thumbnail">> {}
/** 2023/07/11 - 게시글 수정 요청 응답 타입 - by 1-blue */
export interface ApiUpdatePostResponse extends PostWithUser {}
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
