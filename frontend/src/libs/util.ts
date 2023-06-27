/** 2023/06/23 - 배열 섞기 - by 1-blue */
export const shuffle = <T>(array: T[]) => {
  const copy = [...array];

  for (let index = copy.length - 1; index > 0; index--) {
    const randomPosition = Math.floor(Math.random() * (index + 1));

    [copy[index], copy[randomPosition]] = [copy[randomPosition], copy[index]];
  }

  return copy;
};
