/** 2023/07/07 - 유저 모델 타입 - by 1-blue */
export interface User {
  idx: number;
  id: string;
  password: string;
  nickname: string;
  summonerName: string;
  avatar: string;
}

/** 2023/07/07 - 로그인한 유저 정보 요청 요청 타입 - by 1-blue */
export interface ApiGetMeRequest {}
/** 2023/07/07 - 로그인한 유저 정보 요청 응답 타입 - by 1-blue */
export interface ApiGetMeResponse extends Omit<User, "id" | "password"> {}
/** 2023/07/07 - 로그인한 유저 정보 요청 핸들러 타입 - by 1-blue */
export interface ApiGetMeHandler {
  (body: ApiGetMeRequest): Promise<ApiGetMeResponse>;
}
