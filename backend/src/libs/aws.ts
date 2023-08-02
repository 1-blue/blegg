const S3_BASE_URL = "https://blegg.s3.ap-northeast-2.amazonaws.com";
export const convertS3URL = (url: string) =>
  S3_BASE_URL + (url.startsWith("/") ? url : `/${url}`);
