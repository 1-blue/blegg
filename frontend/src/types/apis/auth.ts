/** 2023/07/05 - 회원가입 요청 타입 - by 1-blue */
export interface ApiSignUpRequest {
  id: string;
  password: string;
  nickname: string;
  summonerName?: string;
}
/** 2023/07/05 - 회원가입 응답 타입 - by 1-blue */
export interface ApiSignUpResponse {}
/** 2023/07/05 - 회원가입 핸들러 타입 - by 1-blue */
export interface ApiSignUpHandler {
  (body: ApiSignUpRequest): Promise<ApiSignUpResponse>;
}

/** 2023/07/07 - 로그인 요청 타입 - by 1-blue */
export interface ApiSignInRequest {
  id: string;
  password: string;
}
/** 2023/07/07 - 로그인 응답 타입 - by 1-blue */
export interface ApiSignInResponse {}
/** 2023/07/07 - 로그인 핸들러 타입 - by 1-blue */
export interface ApiSignInHandler {
  (body: ApiSignInRequest): Promise<ApiSignInResponse>;
}

/** 2023/07/07 - 로그아웃 요청 타입 - by 1-blue */
export interface ApiSignOutRequest {}
/** 2023/07/07 - 로그아웃 응답 타입 - by 1-blue */
export interface ApiSignOutResponse {}
/** 2023/07/07 - 로그아웃 핸들러 타입 - by 1-blue */
export interface ApiSignOutHandler {
  (body: ApiSignOutRequest): Promise<ApiSignOutResponse>;
}
