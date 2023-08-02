import { RouterProvider } from "react-router-dom";

import { router } from "@src/router";

/** 2023/06/19 - react-router-dom provider - by 1-blue */
const MyRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MyRouterProvider;
