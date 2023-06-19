import { createBrowserRouter } from "react-router-dom";

import AuthenticationCheck from "@src/components/AuthenticationCheck";

import Home from "@src/pages/Home";

import Error from "@src/pages/Error";

interface RouterElement {
  /** 페이지 경로 */
  path: string;
  /** 사이드바에 표시할 페이지 이름 */
  label: string;
  /** 페이지 엘리먼트 */
  element: React.ReactNode;
  /**
   * 인증이 필요한 페이지 여부
   * true: 로그인한 유저만 접근 가능
   * false: 로그인하지 않은 유저만 접근 가능
   * null: 누구나 접근 가능
   * */
  isAuth: boolean | null;
}

/** 2023/06/19 - router elements ( 여러가지 처리를 위해 사용 ) - by 1-blue */
export const routerElements: RouterElement[] = [
  {
    path: "/",
    label: "홈",
    element: <Home />,
    isAuth: null,
  },
];

/** 2023/06/19 - router ( <RouterProvider>에 사용 ) - by 1-blue */
export const router = createBrowserRouter(
  routerElements.map(({ path, element, isAuth }) => ({
    path,
    element: (
      <AuthenticationCheck isAuth={isAuth}>{element}</AuthenticationCheck>
    ),
    errorElement: <Error />,
  }))
);
