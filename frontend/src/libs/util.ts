/** 2023/06/23 - 배열 섞기 - by 1-blue */
export const shuffle = <T>(array: T[]) => {
  const copy = [...array];

  for (let index = copy.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));

    [copy[index], copy[randomPosition]] = [copy[randomPosition], copy[index]];
  }

  return copy;
};

const S3_BASE_URL = "https://blegg.s3.ap-northeast-2.amazonaws.com";
/** 2023/08/01 - S3 경로로 변경 - by 1-blue */
export const convertS3ImageURL = (url: string) =>
  S3_BASE_URL + (url.startsWith("/") ? url : `/${url}`);
