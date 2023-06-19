import ASide from "./ASide";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

/** 2023/06/19 - 일반 레이아웃 - by 1-blue */
const GeneralLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <ASide />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default GeneralLayout;
