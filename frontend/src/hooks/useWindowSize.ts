import { useState, useLayoutEffect } from "react";

/** 2023/06/20 - 현재 브라우저의 넓이와 높이를 얻는 훅 - by 1-blue */
const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;
