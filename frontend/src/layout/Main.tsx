/** 2023/06/19 - 메인 컴포넌트 - by 1-blue */
const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <main className="max-w-[1024px] mx-auto p-8 w-full">{children}</main>;
};

export default Main;
