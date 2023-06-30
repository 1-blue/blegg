/** 2023/06/29 - 응답할 스펠들 데이터 타입 - by 1-blue */
export interface ApiResponseSpell {
  id: string;
  name: string;
  description: string;
  key: string;
  imageSrc: string;
  cooldown: string;
  range: string;
  cost: string;
}
