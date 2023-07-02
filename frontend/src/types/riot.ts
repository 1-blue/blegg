/** 2023/07/02 - RiotAPI에서 사용하는 이미지 타입 형태 - by 1-blue */
export interface RiotImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

/**
 * 2023/06/28 - [소환사id로 소환사 정보 얻기](https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner) by 1-blue
 */
export interface RiotLeagueEntry {
  leagueId: string;
  /** "RANKED_SOLO_5x5" | "RANKED_FLEX_SR" */
  queueType: RiotQueueType;
  /** "CHALLENGER" | "GRANDMASTER" | "MASTER" | "DIAMOND" | "PLATINUM" | "GOLD" | "SILVER" | "BRONZE" | "IRON" */
  tier: RiotTier;
  /** "I" | "II" | "III" | "IV" */
  rank: RiotRank;
  /** 암호화된 소환사 ID */
  summonerId: string;
  /** 소환사 이름 */
  summonerName: string;
  /** 리그 점수 */
  leaguePoints: number;
  /** 승리 횟수 */
  wins: number;
  /** 패배 횟수 */
  losses: number;
  /** 비활성화 여부 */
  inactive: boolean;
  /** 이전 시즌 기록 있는지 여부 ? */
  veteran: boolean;
  /** 이전 시즌 기록 있는지 여부 ? */
  freshBlood: boolean;
  /** 연승 연패 여부 ? */
  hotStreak: boolean;
}
/** 2023/06/28 - 게임 타입 - by 1-blue */
type RiotQueueType = "RANKED_SOLO_5x5" | "RANKED_FLEX_SR";
/** 2023/06/28 - 소환사 티어 - by 1-blue */
type RiotTier =
  | "CHALLENGER"
  | "GRANDMASTER"
  | "MASTER"
  | "DIAMOND"
  | "PLATINUM"
  | "GOLD"
  | "SILVER"
  | "BRONZE"
  | "IRON";
/** 2023/06/28 - 소환사 랭크 - by 1-blue */
type RiotRank = "I" | "II" | "III" | "IV";

/** 2023/07/02 - 모든 챔피언 이름 ( FIXME: 챔피언 추가되는 경우 고려하기 ) - by 1-blue */
export type RiotChampionName =
  | "Aatrox"
  | "Ahri"
  | "Akali"
  | "Akshan"
  | "Alistar"
  | "Amumu"
  | "Anivia"
  | "Annie"
  | "Aphelios"
  | "Ashe"
  | "AurelionSol"
  | "Azir"
  | "Bard"
  | "Belveth"
  | "Blitzcrank"
  | "Brand"
  | "Braum"
  | "Caitlyn"
  | "Camille"
  | "Cassiopeia"
  | "Chogath"
  | "Corki"
  | "Darius"
  | "Diana"
  | "Draven"
  | "DrMundo"
  | "Ekko"
  | "Elise"
  | "Evelynn"
  | "Ezreal"
  | "Fiddlesticks"
  | "Fiora"
  | "Fizz"
  | "Galio"
  | "Gangplank"
  | "Garen"
  | "Gnar"
  | "Gragas"
  | "Graves"
  | "Gwen"
  | "Hecarim"
  | "Heimerdinger"
  | "Illaoi"
  | "Irelia"
  | "Ivern"
  | "Janna"
  | "JarvanIV"
  | "Jax"
  | "Jayce"
  | "Jhin"
  | "Jinx"
  | "Kaisa"
  | "Kalista"
  | "Karma"
  | "Karthus"
  | "Kassadin"
  | "Katarina"
  | "Kayle"
  | "Kayn"
  | "Kennen"
  | "Khazix"
  | "Kindred"
  | "Kled"
  | "KogMaw"
  | "KSante"
  | "Leblanc"
  | "LeeSin"
  | "Leona"
  | "Lillia"
  | "Lissandra"
  | "Lucian"
  | "Lulu"
  | "Lux"
  | "Malphite"
  | "Malzahar"
  | "Maokai"
  | "MasterYi"
  | "Milio"
  | "MissFortune"
  | "MonkeyKing"
  | "Mordekaiser"
  | "Morgana"
  | "Nami"
  | "Nasus"
  | "Nautilus"
  | "Neeko"
  | "Nidalee"
  | "Nilah"
  | "Nocturne"
  | "Nunu"
  | "Olaf"
  | "Orianna"
  | "Ornn"
  | "Pantheon"
  | "Poppy"
  | "Pyke"
  | "Qiyana"
  | "Quinn"
  | "Rakan"
  | "Rammus"
  | "RekSai"
  | "Rell"
  | "Renata"
  | "Renekton"
  | "Rengar"
  | "Riven"
  | "Rumble"
  | "Ryze"
  | "Samira"
  | "Sejuani"
  | "Senna"
  | "Seraphine"
  | "Sett"
  | "Shaco"
  | "Shen"
  | "Shyvana"
  | "Singed"
  | "Sion"
  | "Sivir"
  | "Skarner"
  | "Sona"
  | "Soraka"
  | "Swain"
  | "Sylas"
  | "Syndra"
  | "TahmKench"
  | "Taliyah"
  | "Talon"
  | "Taric"
  | "Teemo"
  | "Thresh"
  | "Tristana"
  | "Trundle"
  | "Tryndamere"
  | "TwistedFate"
  | "Twitch"
  | "Udyr"
  | "Urgot"
  | "Varus"
  | "Vayne"
  | "Veigar"
  | "Velkoz"
  | "Vex"
  | "Vi"
  | "Viego"
  | "Viktor"
  | "Vladimir"
  | "Volibear"
  | "Warwick"
  | "Xayah"
  | "Xerath"
  | "XinZhao"
  | "Yasuo"
  | "Yone"
  | "Yorick"
  | "Yuumi"
  | "Zac"
  | "Zed"
  | "Zeri"
  | "Ziggs"
  | "Zilean"
  | "Zoe"
  | "Zyra";
