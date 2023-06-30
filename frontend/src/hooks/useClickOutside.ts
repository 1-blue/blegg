import { useEffect, useRef } from "react";

interface Props {
  onOpen: () => void;
  onClose: () => void;
}

/** 2023/06/30 - 외부 클릭 시 닫는 커스텀 훅 - by 1-blue */
const useClickOutside = <T extends HTMLElement>({ onOpen, onClose }: Props) => {
  /** 2023/06/30 - 클릭을 감지할 영역을 감싸는 ref - by 1-blue */
  const containerRef = useRef<T>(null);

  /** 2023/06/30 - 클릭 감지 - by 1-blue */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!(e.target instanceof Node)) return;

      // 현재 클릭한 엘리먼트가 form 내부에 있다면
      if (containerRef.current.contains(e.target)) onOpen();
      // 현재 클릭한 엘리먼트가 form 외부에 있다면
      else onClose();
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, [containerRef, onOpen, onClose]);

  return [containerRef] as const;
};

export default useClickOutside;
