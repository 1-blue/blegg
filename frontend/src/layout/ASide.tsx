import Nav from "./Nav";

/** 2023/06/19 - 사이드 컴포넌트 - by 1-blue */
const ASide = () => {
  return (
    <aside className="w-[300px] min-h-screen p-8 border-r border-main-line overflow-y-auto">
      <Nav />
    </aside>
  );
};

export default ASide;
