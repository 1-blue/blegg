/** 2023/07/03 - [Riot API 아이템](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/item.json)에서 필요한 것만 추출한 응답 타입 - by 1-blue */
export interface ApiResponseItem {
  /** 아이템 Id */
  id: string;
  /** 아이템 이름 */
  name: string;
  /** 아이템 상세 설명 */
  description: string;
  /** 아이템 간단 설명 */
  plaintext: string;
  /** 별칭 */
  colloq: string[];
  /** 아이템 이미지 경로 */
  imageSrc: string;
  /** 아이템 가격 관련 */
  gold: {
    /** 기본 가격 */
    total: number;
    /** 판매 가격 */
    sell: number;
  };

  /** 아이템 설명/별칭/가격들을 모두 합쳐서 설명하는 텍스트 */
  totalDescription: string;
}

/** 2023/06/29 - 응답할 아이템들 데이터 타입 - by 1-blue */
export type ApiResponseItems = ApiResponseItem[];
