/** 2023/06/19 - react-query가 사용하는 key - by 1-blue */
const QUERY_KEYS = {
  ALL_CHAMPION: "ALL_CHAMPION",
  CHAMPION: "CHAMPION",
  SUMMONER: "SUMMONER",
  SPELL: "SPELL",
  ITEM: "ITEM",
  MATCHES: "MATCHES",
  ME: "ME",
  POST: "POST",
  POSTS: "POSTS",
  COMMENT: "COMMENT",
  COMMENTS: "COMMENTS",
  REPLY: "REPLY",
  REPLYS: "REPLYS",
};
export default QUERY_KEYS;

export * from "./useGetAllChampion";
export * from "./useGetDetailChampion";
export * from "./useGetSummoner";
export * from "./useGetSpell";
export * from "./useGetItem";
export * from "./useGetMatches";
