import { useState, useEffect } from "react";

/** 2023/07/01 - 최근 검색어 처리하는 훅 - by 1-blue */
const useRecentSearches = () => {
  /** 2023/06/30 - 최근 검색어 - by 1-blue */
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  /** 2023/06/30 - 최근 검색어 불러오기 - by 1-blue */
  useEffect(() => {
    const words = JSON.parse(localStorage.getItem("recentSearches") || "[]");

    if (!Array.isArray(words)) return setRecentSearches([]);

    setRecentSearches(words);
  }, []);

  /** 2023/06/30 - 모든 최근 검색어 지우기 - by 1-blue */
  const onClaerAllRecentSearches = () => {
    localStorage.removeItem("recentSearches");
    setRecentSearches([]);
  };
  /** 2023/06/30 - 특정 최근 검색어 지우기 - by 1-blue */
  const onClaerOneRecentSearches = (word: string) => {
    const words = recentSearches.filter((recentWord) => recentWord !== word);

    localStorage.setItem("recentSearches", JSON.stringify(words));
    setRecentSearches(words);
  };

  return {
    recentSearches,
    setRecentSearches,
    onClaerAllRecentSearches,
    onClaerOneRecentSearches,
  };
};

export default useRecentSearches;
