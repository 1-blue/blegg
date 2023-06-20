import Nav from "./Nav";

/** 2023/06/19 - 사이드 컴포넌트 - by 1-blue */
const ASide = () => {
  return (
    <aside className="sticky top-0 flex-shrink-0 md:w-[300px] h-auto md:h-screen bg-main-bg border-r border-main-line overflow-y-auto">
      <Nav />
    </aside>
  );
};

export default ASide;
