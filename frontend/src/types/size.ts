/** 2023/06/19 - 공통 사이즈 - by 1-blue */
export type Size =
  | "xs"
  | "sm"
  | "md"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";

/** 2023/06/19 - 사이즈 표 타입 - by 1-blue */
export type SizeCoords = { [key in Size]?: string };
