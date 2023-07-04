/** 2023/07/02 - 특정 아이템 정보 요청 타입 - by 1-blue */
export interface ApiGetItemRequest {
  id: number;
}
/** 2023/07/02 - 특정 아이템 정보 응답 타입 ( [Riot API 아이템](https://ddragon.leagueoflegends.com/cdn/13.13.1/data/ko_KR/item.json) ) - by 1-blue */
export interface ApiGetItemResponse {
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
/** 2023/07/02 - 특정 아이템 정보 핸들러 타입 - by 1-blue */
export interface ApiGetItemHandler {
  (body: ApiGetItemRequest): Promise<ApiGetItemResponse>;
}
