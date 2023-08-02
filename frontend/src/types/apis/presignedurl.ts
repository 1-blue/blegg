/** 2023/07/14 - presignedURL 요청 타입 ( 단일 이미지 업로드 ) - by 1-blue */
export interface ApiGetPresignedURLRequest {
  name: string;
}
/** 2023/07/14 - presignedURL 응답 타입 ( 단일 이미지 업로드 ) - by 1-blue */
export interface ApiGetPresignedURLResponse {
  url: string;
  fields: {
    bucket: string;
    "X-Amz-Algorithm": string;
    "X-Amz-Credential": string;
    "X-Amz-Date": string;
    key: string;
    Policy: string;
    "X-Amz-Signature": string;
  };
}
/** 2023/07/14 - presignedURL 핸들러 타입 ( 단일 이미지 업로드 ) - by 1-blue */
export interface ApiGetPresignedURLHandler {
  (body: ApiGetPresignedURLRequest): Promise<ApiGetPresignedURLResponse>;
}
