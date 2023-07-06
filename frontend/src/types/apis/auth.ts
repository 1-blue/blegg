/** 2023/07/05 - 회원가입 요청 타입 - by 1-blue */
export interface ApiSignUpRequest {
  id: string;
  password: string;
  nickname: string;
  summonerName: string;
}
/** 2023/07/05 - 회원가입 응답 타입 - by 1-blue */
export interface ApiSignUpResponse {}
/** 2023/07/05 - 회원가입 핸들러 타입 - by 1-blue */
export interface ApiSignUpHandler {
  (body: ApiSignUpRequest): Promise<ApiSignUpResponse>;
}
