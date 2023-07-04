import MyReactQueryProvider from "./providers/MyReactQueryProvider";
import MyRouterProvider from "./providers/MyRouterProvider";

/** 2023/06/19 - 세팅 컴포넌트 - by 1-blue */
const App: React.FC = () => {
  return (
    <MyReactQueryProvider>
      <MyRouterProvider />
    </MyReactQueryProvider>
  );
};

export default App;
