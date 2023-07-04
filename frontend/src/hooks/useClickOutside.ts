import { useState, useEffect, useRef } from "react";

/** 2023/06/30 - 외부 클릭 시 닫는 커스텀 훅 - by 1-blue */
const useClickOutside = <T extends HTMLElement>() => {
  /** 2023/06/30 - 검색창에 포커싱 여부 ( + form 내부를 클릭하는지 여부 ) - by 1-blue */
  const [isFocus, setIsFocus] = useState(false);

  /** 2023/06/30 - 클릭을 감지할 영역을 감싸는 ref - by 1-blue */
  const containerRef = useRef<T>(null);

  /** 2023/06/30 - 클릭 감지 - by 1-blue */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!(e.target instanceof HTMLElement)) return;

      // 현재 클릭한 엘리먼트가 form 내부에 있다면
      if (containerRef.current.contains(e.target)) setIsFocus(true);
      // 현재 클릭한 엘리먼트가 form 외부에 있다면
      else setIsFocus(false);

      // 닫아야 하는 엘리먼트라면
      if (e.target.dataset.type === "close") {
        setTimeout(() => setIsFocus(false), 200);
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [containerRef, setIsFocus]);

  return { isFocus, setIsFocus, containerRef };
};

export default useClickOutside;
