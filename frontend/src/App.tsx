import MyReactQueryProvider from "./providers/MyReactQueryProvider";
import MyRouterProvider from "./providers/MyRouterProvider";

import GeneralLayout from "./layout/GeneralLayout";

/** 2023/06/19 - 세팅 컴포넌트 - by 1-blue */
const App = () => {
  return (
    <MyReactQueryProvider>
      <GeneralLayout>
        <MyRouterProvider />
      </GeneralLayout>
    </MyReactQueryProvider>
  );
};

export default App;
