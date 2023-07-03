/** 2023/06/29 - [MatchId로 특정 경기 정보 얻기](https://developer.riotgames.com/apis#match-v5/GET_getMatch) - by 1-blue */
export interface RiotMatch {
  metadata: RiotMatchMetadata;
  info: RiotMatchInfo;
}

interface RiotMatchMetadata {
  /** ? */
  dataVersion: string;
  /** 매치 ID */
  matchId: string;
  /** 참가자들의 puuid ( 플레이어들 ) */
  participants: string[];
}

interface RiotMatchInfo {
  /** 게임 로딩 시간 (ms) */
  gameCreation: number;
  /** 게임 시작 시간 (ms) */
  gameStartTimestamp: number;
  /** 게임 종료 시간 (ms) */
  gameEndTimestamp: number;
  /** 게임 플레이 시간 (s) */
  gameDuration: number;
  /** 게임 ID */
  gameId: number;
  /** ? */
  gameMode: string;
  /** ? */
  gameName: string;
  /** ? */
  gameType: string;
  /** ? */
  gameVersion: string;
  /** ? */
  mapId: number;
  /** 플레이어 정보 */
  participants: RiotMatchParticipant[];
  /** 플레이 플렛폼 Id ( "KR" ) */
  platformId: "KR";
  /** 큐 Id */
  queueId: number;
  /** 벤, 오브젝트 등 팀에 대한 정보 */
  teams: RiotMatchTeam[];
  /** ? */
  tournamentCode: string;
}
interface RiotMatchTeam {
  bans: RiotMatchBan[];
  objectives: RiotMatchObjectives;
  teamId: number;
  win: boolean;
}
interface RiotMatchBan {
  /** 챔피언 Id */
  championId: number;
  /** 언제 선택했는지 */
  pickTurn: number;
}
interface RiotMatchObjectives {
  baron: {
    first: boolean;
    kills: number;
  };
  champion: {
    first: boolean;
    kills: number;
  };
  dragon: {
    first: boolean;
    kills: number;
  };
  inhibitor: {
    first: boolean;
    kills: number;
  };
  riftHerald: {
    first: boolean;
    kills: number;
  };
  tower: {
    first: boolean;
    kills: number;
  };
}
interface RiotMatchParticipant {
  // ==================== 핑 ====================
  /** 모든 핑 ? */
  allInPings: number;
  /** 어시스트핑 ? */
  assistMePings: number;
  /** 일반핑 */
  basicPings: number;
  /** 명령핑 */
  commandPings: number;
  /** 위험핑 */
  dangerPings: number;
  /** 미아핑 */
  enemyMissingPings: number;
  /** 적와드핑 */
  enemyVisionPings: number;
  /** 백핑 */
  getBackPings: number;
  /** 멈춰핑 ? */
  holdPings: number;
  /** 시야핑 */
  needVisionPings: number;
  /** 미끼핑 */
  baitPings: number;
  /** 가는핑 */
  onMyWayPings: number;
  /** 푸쉬핑 */
  pushPings: number;
  /** 시야제거핑 */
  visionClearedPings: number;

  // ==================== 소환사 정보 ====================
  /** 소환사 이름 */
  summonerName: string;
  /** 팀에서 포지션 */
  teamPosition: RiotMatchTeamPosition;
  /** 라인 */
  lane: string;
  /** 포지션 */
  individualPosition: string;
  /** ? */
  role: string;

  // ==================== 킬/데스/어시 ====================
  /** 킬수 */
  kills: number;
  /** 어시스트 */
  assists: number;
  /** 죽은 횟수 */
  deaths: number;
  /** 연속킬 횟수 */
  killingSprees: number;
  /** 가장 큰 연속 킬수 */
  largestKillingSpree: number;
  /** 가장 큰 다중 킬수 */
  largestMultiKill: number;
  /** 더블킬 횟수 */
  doubleKills: number;
  /** 트리플킬 횟수 */
  tripleKills: number;
  /** 쿼드라킬 횟수 */
  quadraKills: number;
  /** 펜타킬 횟수 */
  pentaKills: number;
  /** 중립미니언(정글) 처치 횟수 */
  neutralMinionsKilled: number;
  /** 미니언 처치량 */
  totalMinionsKilled: number;

  // ==================== 스펠 정보 ====================
  /** 스펠 ? */
  summoner1Casts: number;
  /** 스펠 ? */
  summoner1Id: number;
  /** 스펠 ? */
  summoner2Casts: number;
  /** 스펠 ? */
  summoner2Id: number;

  // ==================== 챔피언 정보 ====================
  /** 경험치 */
  champExperience: number;
  /** 레벨 */
  champLevel: number;
  /** 챔피언 ID */
  championId: number;
  /** 챔피언 이름 */
  championName: string;

  // ==================== 아이템 정보 ====================
  /** 아이템 ID */
  item0: number;
  /** 아이템 ID */
  item1: number;
  /** 아이템 ID */
  item2: number;
  /** 아이템 ID */
  item3: number;
  /** 아이템 ID */
  item4: number;
  /** 아이템 ID */
  item5: number;
  /** 아이템 ID */
  item6: number;
  /** 구매한 아이템 개수 */
  itemsPurchased: number;

  // ==================== 스킬 사용량 ====================
  /** Q 스킬 사용 횟수 */
  spell1Casts: number;
  /** W 스킬 사용 횟수 */
  spell2Casts: number;
  /** E 스킬 사용 횟수 */
  spell3Casts: number;
  /** R 스킬 사용 횟수 */
  spell4Casts: number;

  // ==================== 게임 정보 ====================
  /** 최장 생존 시간 */
  longestTimeSpentLiving: number;
  /** 사망 시간 */
  totalTimeSpentDead: number;
  /** 승리 여부 */
  win: boolean;

  /** 바론 죽인 횟수 */
  baronKills: number;
  /** 현상금 */
  bountyLevel: number;
  /** ? */
  challenges: {
    "12AssistStreakCount": number;
    /** 스킬 사용 횟수 */
    abilityUses: number;
    /** 15분 이전 aces 달성 횟수 ? */
    acesBefore15Minutes: number;
    /**  */
    alliedJungleMonsterKills: number;
    baronTakedowns: number;
    blastConeOppositeOpponentCount: number;
    bountyGold: number;
    buffsStolen: number;
    completeSupportQuestInTime: number;
    controlWardTimeCoverageInRiverOrEnemyHalf: number;
    controlWardsPlaced: number;
    damagePerMinute: number;
    damageTakenOnTeamPercentage: number;
    dancedWithRiftHerald: number;
    deathsByEnemyChamps: number;
    dodgeSkillShotsSmallWindow: number;
    doubleAces: number;
    dragonTakedowns: number;
    earlyLaningPhaseGoldExpAdvantage: number;
    effectiveHealAndShielding: number;
    elderDragonKillsWithOpposingSoul: number;
    elderDragonMultikills: number;
    enemyChampionImmobilizations: number;
    enemyJungleMonsterKills: number;
    epicMonsterKillsNearEnemyJungler: number;
    epicMonsterKillsWithin30SecondsOfSpawn: number;
    epicMonsterSteals: number;
    epicMonsterStolenWithoutSmite: number;
    firstTurretKilled: number;
    flawlessAces: number;
    fullTeamTakedown: number;
    gameLength: number;
    getTakedownsInAllLanesEarlyJungleAsLaner: number;
    goldPerMinute: number;
    hadOpenNexus: number;
    immobilizeAndKillWithAlly: number;
    initialBuffCount: number;
    initialCrabCount: number;
    jungleCsBefore10Minutes: number;
    junglerTakedownsNearDamagedEpicMonster: number;
    kTurretsDestroyedBeforePlatesFall: number;
    kda: number;
    killAfterHiddenWithAlly: number;
    killParticipation: number;
    killedChampTookFullTeamDamageSurvived: number;
    killingSprees: number;
    killsNearEnemyTurret: number;
    killsOnOtherLanesEarlyJungleAsLaner: number;
    killsOnRecentlyHealedByAramPack: number;
    killsUnderOwnTurret: number;
    killsWithHelpFromEpicMonster: number;
    knockEnemyIntoTeamAndKill: number;
    landSkillShotsEarlyGame: number;
    laneMinionsFirst10Minutes: number;
    laningPhaseGoldExpAdvantage: number;
    legendaryCount: number;
    lostAnInhibitor: number;
    maxCsAdvantageOnLaneOpponent: number;
    maxKillDeficit: number;
    maxLevelLeadLaneOpponent: number;
    mejaisFullStackInTime: number;
    moreEnemyJungleThanOpponent: number;
    multiKillOneSpell: number;
    multiTurretRiftHeraldCount: number;
    multikills: number;
    multikillsAfterAggressiveFlash: number;
    mythicItemUsed: number;
    outerTurretExecutesBefore10Minutes: number;
    outnumberedKills: number;
    outnumberedNexusKill: number;
    perfectDragonSoulsTaken: number;
    perfectGame: number;
    pickKillWithAlly: number;
    playedChampSelectPosition: number;
    poroExplosions: number;
    quickCleanse: number;
    quickFirstTurret: number;
    quickSoloKills: number;
    riftHeraldTakedowns: number;
    saveAllyFromDeath: number;
    scuttleCrabKills: number;
    skillshotsDodged: number;
    skillshotsHit: number;
    snowballsHit: number;
    soloBaronKills: number;
    soloKills: number;
    stealthWardsPlaced: number;
    survivedSingleDigitHpCount: number;
    survivedThreeImmobilizesInFight: number;
    takedownOnFirstTurret: number;
    takedowns: number;
    takedownsAfterGainingLevelAdvantage: number;
    takedownsBeforeJungleMinionSpawn: number;
    takedownsFirstXMinutes: number;
    takedownsInAlcove: number;
    takedownsInEnemyFountain: number;
    teamBaronKills: number;
    teamDamagePercentage: number;
    teamElderDragonKills: number;
    teamRiftHeraldKills: number;
    tookLargeDamageSurvived: number;
    turretPlatesTaken: number;
    turretTakedowns: number;
    turretsTakenWithRiftHerald: number;
    twentyMinionsIn3SecondsCount: number;
    twoWardsOneSweeperCount: number;
    unseenRecalls: number;
    visionScoreAdvantageLaneOpponent: number;
    visionScorePerMinute: number;
    wardTakedowns: number;
    wardTakedownsBefore20M: number;
    wardsGuarded: number;
  };
  /** ? */
  championTransform: number;
  /**  */
  consumablesPurchased: number;
  /** 타워에 가한 피해량 ? */
  damageDealtToBuildings: number;
  /** 오브젝트에 가한 피해량 ? */
  damageDealtToObjectives: number;
  /** 타워에 가한 피해량 */
  damageDealtToTurrets: number;
  /** 피해량 ? */
  damageSelfMitigated: number;
  /** 와드 설치 횟수 */
  detectorWardsPlaced: number;
  /** 드래곤 죽인 횟수 */
  dragonKills: number;
  /** ? */
  eligibleForProgression: boolean;
  /** 첫 킬 어시스트 여부 */
  firstBloodAssist: boolean;
  /** 첫 킬 여부 */
  firstBloodKill: boolean;
  /** 첫 타워 제거 어시스트 여부 */
  firstTowerAssist: boolean;
  /** 첫 타워 제거 여부 */
  firstTowerKill: boolean;
  /** 조기 항복 여부 */
  gameEndedInEarlySurrender: boolean;
  /** 항복 여부 */
  gameEndedInSurrender: boolean;
  /** 골드 획득량 */
  goldEarned: number;
  /** 골드 사용량 */
  goldSpent: number;

  /** 억제기 제거 횟수 */
  inhibitorKills: number;
  /** 엑제기 타격 횟수 */
  inhibitorTakedowns: number;
  /** 억제기 밀린 횟수 */
  inhibitorsLost: number;
  /** 가장 큰 치명타 피해량 */
  largestCriticalStrike: number;
  /** 마법 피해량 */
  magicDamageDealt: number;
  /** 챔피언에게 입힌 마법 피해량 */
  magicDamageDealtToChampions: number;
  /** 받은 마법 피해량 */
  magicDamageTaken: number;
  /** 넥서스 처치 횟수 */
  nexusKills: number;
  /** 넥서스 처치 횟수 */
  nexusLost: number;
  /** 넥서스 타격 횟수 */
  nexusTakedowns: number;
  /** 오브젝트 뺏긴 횟수 */
  objectivesStolen: number;
  /** 오브젝트 뺏긴 횟수 ( 어시 ) */
  objectivesStolenAssists: number;
  /** 플레이어ID */
  participantId: number;
  /** ? */
  perks: {
    statPerks: {
      defense: number;
      flex: number;
      offense: number;
    };
    styles: {
      description: string;
      selections: {
        perk: number;
        var1: number;
        var2: number;
        var3: number;
      }[];
      style: number;
    }[];
  };
  /** 총 가한 물리 피해량 */
  physicalDamageDealt: number;
  /** 챔피언에게 입힌 물리 피해량 */
  physicalDamageDealtToChampions: number;
  /** 받은 물리 피해량 */
  physicalDamageTaken: number;
  /** ? */
  playerAugment1: number;
  /** ? */
  playerAugment2: number;
  /** ? */
  playerAugment3: number;
  /** ? */
  playerAugment4: number;
  /** ? */
  playerSubteamId: number;
  /** 아이콘 ID */
  profileIcon: number;
  /** puuid */
  puuid: string;
  /** ? */
  riotIdName: string;
  /** ? */
  riotIdTagline: string;
  /** 구매한 와드 개수 */
  sightWardsBoughtInGame: number;
  /** ? */
  subteamPlacement: number;
  /** 소환사 Id */
  summonerId: string;
  /** 소환사 레벨 */
  summonerLevel: number;
  /** 팀 조기 항복 여부 */
  teamEarlySurrendered: boolean;
  /** 팀 ID */
  teamId: number;
  /** 다른 플레이어 CC기 시간 ? */
  timeCCingOthers: number;
  /** 플레이 시간 */
  timePlayed: number;
  /** 아군 정글 미니언 처치 횟수 */
  totalAllyJungleMinionsKilled: number;
  /** 총 피해량 */
  totalDamageDealt: number;
  /** 챔피언에게 입힌 총 피해량 */
  totalDamageDealtToChampions: number;
  /** 보호막으로 팀원을 보호한량 */
  totalDamageShieldedOnTeammates: number;
  /** 받은 총 피해량 */
  totalDamageTaken: number;
  /** 적 정글 미니언 처치량 */
  totalEnemyJungleMinionsKilled: number;
  /** 힐량 */
  totalHeal: number;
  /** 팀에게 한 힐량 */
  totalHealsOnTeammates: number;
  /** 총 CC기 지속 시간 */
  totalTimeCCDealt: number;
  /** 힐 횟수 */
  totalUnitsHealed: number;
  /** 총 트루 데이지량 */
  trueDamageDealt: number;
  /** 챔피언에게 입힌 트루 데이지량 */
  trueDamageDealtToChampions: number;
  /** 받은 트루 데이지량 */
  trueDamageTaken: number;
  /** 타워 제거 횟수 */
  turretKills: number;
  /** ? */
  turretTakedowns: number;
  /** 밀린 타워 횟수 */
  turretsLost: number;
  /** ? */
  unrealKills: number;
  /** 시야 점수 */
  visionScore: number;
  /** 구매한 시야 와드 수 */
  visionWardsBoughtInGame: number;
  /** 제거한 와드 수 */
  wardsKilled: number;
  /** 설치한 와드 수 */
  wardsPlaced: number;
}
type RiotMatchTeamPosition = "TOP" | "JUNGLE" | "MIDDLE" | "BOTTOM" | "UTILITY";
