import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

/**
 * 2023/06/19 - axios instance - by 1-blue
 *
 * 모든 요청 함수의 접두사는 api + (Get | Create | Update | Delete)로 고정
 * 단수, 복수 구분 철저하게
 * 요청과 응답에 대한 타입을 해당 함수 바로 위에 선언 ( 해당 함수에서만 사용하기 때문 )
 * */
const axiosInstance = axios.create({
  baseURL: SERVER_URL,
  timeout: 5000,
  withCredentials: true,
});

export default axiosInstance;

export * from "./champion";
export * from "./summoner";
export * from "./spell";
export * from "./item";
export * from "./match";
export * from "./auth";
export * from "./me";
export * from "./post";
export * from "./presignedurl";
export * from "./league";
