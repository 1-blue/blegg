import type { Post, PostRating, SimpleUser, SortBy, Comment } from "..";

// ==================== 게시글 ====================

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
  (postIdx: number, body: ApiUpdatePostRequest): Promise<ApiUpdatePostResponse>;
}

/** 2023/07/11 - 게시글 제거 요청 타입 - by 1-blue */
export interface ApiDeletePostRequest extends Pick<Post, "idx"> {}
/** 2023/07/11 - 게시글 제거 요청 응답 타입 - by 1-blue */
export interface ApiDeletePostResponse extends Post {}
/** 2023/07/11 - 게시글 제거 요청 핸들러 타입 - by 1-blue */
export interface ApiDeletePostHandler {
  (body: ApiDeletePostRequest): Promise<ApiDeletePostResponse>;
}

// ==================== 게시글 평가 ====================

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

// ==================== 게시글 조회수 ====================

/** 2023/07/13 - 게시글 조회수 증가 요청 타입 - by 1-blue */
export interface ApiAddViewCountOfPostRequest extends Pick<Post, "idx"> {}
/** 2023/07/13 - 게시글 조회수 증가 요청 응답 타입 - by 1-blue */
export interface ApiAddViewCountOfPostResponse {}
/** 2023/07/13 - 게시글 조회수 증가 요청 핸들러 타입 - by 1-blue */
export interface ApiAddViewCountOfPostHandler {
  (body: ApiAddViewCountOfPostRequest): Promise<ApiAddViewCountOfPostResponse>;
}

// ==================== 게시글의 댓글 ====================

type CommentWithUser = Comment & {
  user: SimpleUser;
};

/** 2023/07/16 - 댓글 생성 요청 타입 - by 1-blue */
export interface ApiCreateCommentRequest extends Pick<Comment, "content"> {}
/** 2023/07/16 - 댓글 생성 요청 응답 타입 - by 1-blue */
export interface ApiCreateCommentResponse extends CommentWithUser {}
/** 2023/07/16 - 댓글 생성 요청 핸들러 타입 - by 1-blue */
export interface ApiCreateCommentHandler {
  (
    postIdx: number,
    body: ApiCreateCommentRequest
  ): Promise<ApiCreateCommentResponse>;
}

/** 2023/07/16 - 여러 댓글들 요청 타입 - by 1-blue */
export interface ApiFindManyCommentRequest {
  start?: number;
  count?: number;
}
/** 2023/07/16 - 여러 댓글들 요청 응답 타입 - by 1-blue */
export type ApiFindManyCommentResponse = CommentWithUser[];
/** 2023/07/16 - 여러 댓글들 요청 핸들러 타입 - by 1-blue */
export interface ApiFindManyCommentHandler {
  (
    postIdx: number,
    body: ApiFindManyCommentRequest
  ): Promise<ApiFindManyCommentResponse>;
}

/** 2023/07/16 - 댓글 수정 요청 타입 - by 1-blue */
export interface ApiUpdateCommentRequest
  extends Partial<Pick<Comment, "content">> {}
/** 2023/07/16 - 댓글 수정 요청 응답 타입 - by 1-blue */
export interface ApiUpdateCommentResponse extends CommentWithUser {}
/** 2023/07/16 - 댓글 수정 요청 핸들러 타입 - by 1-blue */
export interface ApiUpdateCommentHandler {
  (
    postIdx: number,
    commentIdx: number,
    body: ApiUpdateCommentRequest
  ): Promise<ApiUpdateCommentResponse>;
}

/** 2023/07/16 - 댓글 제거 요청 타입 - by 1-blue */
export interface ApiDeleteCommentRequest {}
/** 2023/07/16 - 댓글 제거 요청 응답 타입 - by 1-blue */
export interface ApiDeleteCommentResponse extends Comment {}
/** 2023/07/16 - 댓글 제거 요청 핸들러 타입 - by 1-blue */
export interface ApiDeleteCommentHandler {
  (postIdx: number, commentIdx: number): Promise<ApiDeleteCommentResponse>;
}
