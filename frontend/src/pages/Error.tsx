import { useRouteError } from "react-router-dom";

/** 2023/06/19 - 에러 페이지 컴포넌트 - by 1-blue */
const Error: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <article>
      <h1>Error</h1>
    </article>
  );
};

export default Error;
