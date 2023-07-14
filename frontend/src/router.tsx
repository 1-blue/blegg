import { createBrowserRouter } from "react-router-dom";
import {
  HomeIcon as OHomeIcon,
  PresentationChartLineIcon as OPresentationChartLineIcon,
  PresentationChartBarIcon as OPresentationChartBarIcon,
  BookOpenIcon as OBookOpenIcon,
  LockOpenIcon as OLockOpenIcon,
  KeyIcon as OKeyIcon,
  UserCircleIcon as OUserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SHomeIcon,
  PresentationChartLineIcon as SPresentationChartLineIcon,
  PresentationChartBarIcon as SPresentationChartBarIcon,
  BookOpenIcon as SBookOpenIcon,
  LockOpenIcon as SLockOpenIcon,
  KeyIcon as SKeyIcon,
  UserCircleIcon as SUserCircleIcon,
} from "@heroicons/react/24/solid";

import AuthenticationCheck from "@src/components/AuthenticationCheck";

import GeneralLayout from "@src/layout/GeneralLayout";

import Home from "@src/pages/Home";
import Champions from "@src/pages/Champions";
import Summoner from "@src/pages/Summoner";
import Community from "@src/pages/Community";
import CommunityWriter from "./pages/CommunityWriter";
import SignIn from "@src/pages/SignIn";
import SignUp from "@src/pages/SignUp";
import Profile from "@src/pages/Profile";
import Error from "@src/pages/Error";
import OAuthSuccess from "./pages/OAuthSuccess";
import OAuthFailure from "./pages/OAuthFailure";

interface RouterElement {
  /** 페이지 경로 */
  path: string;
  /** 사이드바에 표시할 페이지 이름 */
  label?: string;
  /** 페이지 엘리먼트 */
  element: React.ReactNode;
  /** 페이지 아이콘 */
  icon?: [React.ReactNode, React.ReactNode];
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
    label: "메인",
    element: <Home />,
    icon: [
      <OHomeIcon className="h-6 w-6" />,
      <SHomeIcon className="h-6 w-6" />,
    ],
    isAuth: null,
  },
  {
    path: "/champions",
    label: "챔피언 정보",
    element: <Champions />,
    icon: [
      <OPresentationChartLineIcon className="h-6 w-6" />,
      <SPresentationChartLineIcon className="h-6 w-6" />,
    ],
    isAuth: null,
  },
  {
    path: "/summoner",
    label: "소환사 전적",
    element: <Summoner />,
    icon: [
      <OPresentationChartBarIcon className="h-6 w-6" />,
      <SPresentationChartBarIcon className="h-6 w-6" />,
    ],
    isAuth: null,
  },
  {
    path: "/community",
    label: "커뮤니티",
    element: <Community />,
    icon: [
      <OBookOpenIcon className="h-6 w-6" />,
      <SBookOpenIcon className="h-6 w-6" />,
    ],
    isAuth: null,
  },
  {
    path: "/community/create",
    element: <CommunityWriter />,
    isAuth: null,
  },
  {
    path: "/signin",
    label: "로그인",
    element: <SignIn />,
    icon: [
      <OLockOpenIcon className="h-6 w-6" />,
      <SLockOpenIcon className="h-6 w-6" />,
    ],
    isAuth: false,
  },
  {
    path: "/signup",
    label: "회원가입",
    element: <SignUp />,
    icon: [<OKeyIcon className="h-6 w-6" />, <SKeyIcon className="h-6 w-6" />],
    isAuth: false,
  },
  {
    path: "/profile",
    label: "내 정보",
    element: <Profile />,
    icon: [
      <OUserCircleIcon className="h-6 w-6" />,
      <SUserCircleIcon className="h-6 w-6" />,
    ],
    isAuth: true,
  },
  {
    path: "/oauth/success",
    element: <OAuthSuccess />,
    isAuth: null,
  },
  {
    path: "/oauth/failure",
    element: <OAuthFailure />,
    isAuth: null,
  },
];

/** 2023/06/19 - router ( <RouterProvider>에 사용 ) - by 1-blue */
export const router = createBrowserRouter(
  routerElements.map(({ path, element, isAuth }) => ({
    path,
    element: (
      <AuthenticationCheck isAuth={isAuth}>
        <GeneralLayout>{element}</GeneralLayout>
      </AuthenticationCheck>
    ),
    errorElement: <Error />,
  }))
);
