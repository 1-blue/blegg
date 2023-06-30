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
  /** 아이템 효과 */
  stats: string[];
}

/** 2023/06/29 - 응답할 아이템들 데이터 타입 - by 1-blue */
export type ApiResponseItems = ApiResponseItem[];
