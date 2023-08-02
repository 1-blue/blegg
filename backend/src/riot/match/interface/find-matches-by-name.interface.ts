/** 2023/07/03 - [MatchId로 특정 경기 정보 얻기](https://developer.riotgames.com/apis#match-v5/GET_getMatch)에서 필요한 것만 추출한 응답 타입 - by 1-blue */
export interface ApiResponseMatch {
  // 게임 정보
  info: {
    /** 식별자 */
    id: number;
    /** 게임 모드 ( "일반게임" | "솔로랭크" | "자유랭크" ) */
    mode: string;
    /** 승리여부 */
    win: boolean;
    time: {
      /** 게임 시작 시간 */
      start: number;
      /** 게임 종료 시간 */
      end: number;
      /** 게임 플레이 시간 */
      play: number;
    };
  };
  // 플레이어 정보
  player: Player;
  // red팀 플레이어 정보 ( 5인 )
  redTeam: Participant[];
  // blue팀 플레이어 정보 ( 5인 )
  blueTeam: Participant[];
}

/** 플레이어 */
interface Player {
  // 정보
  info: {
    /** 소환사 이름 */
    name: string;
    /** 플레이 포지션 */
    position: RiotTeamPosition;
    /** 라인 */
    lane: string;
  };

  // 챔피언
  champion: {
    /** 챔피언 이름 */
    name: string;
    /** 챔피언 레벨 */
    level: number;
    /** 챔피언 이미지 경로 */
    imageSrc: string;
  };

  // 킬/데스/어시/미니언
  scores: {
    /** KDA */
    kda: number;
    /** 킬수 */
    kills: number;
    /** 어시스트 */
    assists: number;
    /** 죽은 횟수 */
    deaths: number;
    /** 더블킬 횟수 */
    doubleKills: number;
    /** 트리플킬 횟수 */
    tripleKills: number;
    /** 쿼드라킬 횟수 */
    quadraKills: number;
    /** 펜타킬 횟수 */
    pentaKills: number;
    /** 미니언 처치 횟수 */
    cs: {
      minion: number;
      jungle: number;
      average: number;
    };
  };

  // 스펠 key ( D, F 순서 )
  spellKeys: [number, number];

  // 아이템 Id들 ( 아이템 6개, 장신구, 총 구매 횟수 )
  itemIds: [number, number, number, number, number, number, number, number];
}
type RiotTeamPosition = "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";

/** 같이 플레이한 유저 정보 */
interface Participant {
  /** 소환사 */
  summoner: {
    /** 소환사 이름 */
    name: string;
    /** 플레이 포지션 */
    position: RiotTeamPosition;
    /** 라인 */
    lane: string;
  };

  /** 챔피언 */
  champion: {
    /** 챔피언 이름 */
    name: string;
    /** 챔피언 레벨 */
    level: number;
    /** 챔피언 이미지 경로 */
    imageSrc: string;
  };
}
