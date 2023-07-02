import { createBrowserRouter } from "react-router-dom";
import {
  HomeIcon as OHomeIcon,
  PresentationChartLineIcon as OPresentationChartLineIcon,
  PresentationChartBarIcon as OPresentationChartBarIcon,
  BookOpenIcon as OBookOpenIcon,
  LockOpenIcon as OLockOpenIcon,
} from "@heroicons/react/24/outline";
import {
  HomeIcon as SHomeIcon,
  PresentationChartLineIcon as SPresentationChartLineIcon,
  PresentationChartBarIcon as SPresentationChartBarIcon,
  BookOpenIcon as SBookOpenIcon,
  LockOpenIcon as SLockOpenIcon,
} from "@heroicons/react/24/solid";

import AuthenticationCheck from "@src/components/AuthenticationCheck";

import Home from "@src/pages/Home";

import Error from "@src/pages/Error";
import GeneralLayout from "./layout/GeneralLayout";
import Champions from "./pages/Champions";
import Summoner from "./pages/Summoner";
import Community from "./pages/Community";

interface RouterElement {
  /** 페이지 경로 */
  path: string;
  /** 사이드바에 표시할 페이지 이름 */
  label: string;
  /** 페이지 엘리먼트 */
  element: React.ReactNode;
  /** 페이지 아이콘 */
  icon: [React.ReactNode, React.ReactNode];
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
    path: "/?login=t",
    label: "로그인",
    element: <Home />,
    icon: [
      <OLockOpenIcon className="h-6 w-6" />,
      <SLockOpenIcon className="h-6 w-6" />,
    ],
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
