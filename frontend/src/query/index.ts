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

export * from "./useGetMe";

export * from "./useCreatePost";
export * from "./useFindManyPost";
export * from "./useFindOnePost";
export * from "./useUpdatePost";
export * from "./useDeletePost";
export * from "./useLikeOfPost";
export * from "./useHateOfPost";
export * from "./useAddViewCountOfPost";

export * from "./useCreateComment";
export * from "./useFindManyComment";
export * from "./useUpdateComment";
export * from "./useDeleteComment";

export * from "./useCreateReply";
export * from "./useFindManyReply";
export * from "./useUpdateReply";
export * from "./useDeleteReply";
