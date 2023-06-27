/** 2023/06/22 -  "{{ eN }}" 형식 탐색 - by 1-blue */
export const effectRegExp = /\{\{ (e[^}]{1}) \}\}/g;
/** 2023/06/22 -  "{{ * }}" 형식 탐색 - by 1-blue */
export const restEffectRegExp = /\{\{ ([^\}]+) \}\}/g;
