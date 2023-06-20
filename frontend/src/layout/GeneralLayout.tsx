import ScrollProgress from "./ScrollProgress";
// import Header from "./Header";
import ASide from "./ASide";
import Main from "./Main";
import Footer from "./Footer";

/** 2023/06/19 - 일반 레이아웃 - by 1-blue */
const GeneralLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <ScrollProgress />

      {/* <Header /> */}
      <ASide />
      <Main>
        {children}
        <Footer />
      </Main>
    </div>
  );
};

export default GeneralLayout;
