import type {
  ApiGetAllChampionResponse,
  ApiGetDetailChampionResponse,
  ApiGetItemResponse,
  ApiGetMatchesResponse,
  ApiGetSpellResponse,
} from "@src/types/apis";

/** 2023/06/26 - 특정 챔피언 상세 정보 테스트용 데이터 ( using StoryBook ) - by 1-blue */
export const mocDetailChampion: ApiGetDetailChampionResponse = {
  id: "Poppy",
  name: "뽀삐",
  title: "망치의 수호자",
  allytips: [
    "강철의 외교관을 사용했을 때 던지는 방패는 보통 벽 옆에 떨어지므로 용감한 돌진 스킬을 연계하면 좋습니다.",
    "수호자의 심판은 힘을 모으지 않고도 사용할 수 있습니다. 1대1 상황에서 적에게 바로 수호자의 심판을 써서 밀어내 보세요.",
  ],
  enemytips: [
    "뽀삐는 굳건한 태세를 이용해 근처에서 돌진하는 적을 막을 수 있습니다.",
    "뽀삐가 망치를 돌리는 건 궁극기를 위해 힘을 모으고 있다는 뜻입니다.",
    "방패를 밟으면 뽀삐가 다시 줍지 못하도록 파괴할 수 있습니다.",
  ],
  stats: {
    hp: 610,
    hpperlevel: 104,
    mp: 280,
    mpperlevel: 40,
    movespeed: 345,
    armor: 38,
    armorperlevel: 4.7,
    spellblock: 32,
    spellblockperlevel: 2.05,
    attackrange: 125,
    hpregen: 8,
    hpregenperlevel: 0.8,
    mpregen: 7,
    mpregenperlevel: 0.7,
    crit: 0,
    critperlevel: 0,
    attackdamage: 64,
    attackdamageperlevel: 4,
    attackspeedperlevel: 2.5,
    attackspeed: 0.625,
  },
  info: {
    attack: 6,
    defense: 7,
    magic: 2,
    difficulty: 6,
  },
  skins: [
    {
      id: "78000",
      name: "default",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_0.jpg",
    },
    {
      id: "78001",
      name: "녹서스 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_1.jpg",
    },
    {
      id: "78002",
      name: "롤리뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_2.jpg",
    },
    {
      id: "78003",
      name: "대장장이 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_3.jpg",
    },
    {
      id: "78004",
      name: "봉제인형 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_4.jpg",
    },
    {
      id: "78005",
      name: "전투 예복 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_5.jpg",
    },
    {
      id: "78006",
      name: "붉은 망치 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_6.jpg",
    },
    {
      id: "78007",
      name: "별 수호자 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_7.jpg",
    },
    {
      id: "78014",
      name: "눈꽃사슴 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_14.jpg",
    },
    {
      id: "78015",
      name: "마법공학 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_15.jpg",
    },
    {
      id: "78016",
      name: "우주비행사 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_16.jpg",
    },
    {
      id: "78024",
      name: "마녀 뽀삐",
      src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Poppy_24.jpg",
    },
  ],
  skills: [
    {
      type: "P",
      src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/passive/Poppy_Passive.png",
      alt: "강철의 외교관 ( 뽀삐 패시브 )",
      title: "강철의 외교관",
      description:
        "뽀삐가 던진 방패가 대상을 맞히고 튕겨나갑니다. 뽀삐는 방패를 다시 주워 일시적인 보호막 효과를 얻을 수 있습니다.",
    },
    {
      type: "Q",
      src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/PoppyQ.png",
      alt: "망치 강타 ( 뽀삐 Q 스킬 )",
      title: "망치 강타",
      description:
        "뽀삐가 땅을 힘껏 내려쳐 <physicalDamage>(?)</physicalDamage>+최대 체력의 <physicalDamage>9%에 해당하는 물리 피해</physicalDamage>를 입히고 지대를 불안정하게 만듭니다. <br /><br />불안정한 지대는 적을 20/25/30/35/40% <status>둔화</status>시키고 1초 뒤 폭발하여 <physicalDamage>(?)</physicalDamage>+최대 체력의 <physicalDamage>9%에 해당하는 물리 피해</physicalDamage>를 입힙니다.(?)<br /><br />사거리: 430<br />소모값: 35/40/45/50/55<br />재사용 대기시간: 8/7/6/5/4",
    },
    {
      type: "W",
      src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/PoppyW.png",
      alt: "굳건한 태세 ( 뽀삐 W 스킬 )",
      title: "굳건한 태세",
      description:
        "<spellPassive>기본 지속 효과:</spellPassive> 뽀삐가 <scaleArmor>(?)의 방어력</scaleArmor>과 <scaleMR>(?)의 마법 저항력</scaleMR>을 추가로 얻습니다. 뽀삐의 체력이 (?)% 미만일 때는 효과가 두 배로 늘어납니다.<br /><br /><spellActive>사용 시:</spellActive> 뽀삐의 이동 속도가 <speed>40%</speed> 증가하고 역장을 둘러 2초 동안 주변에서 돌진하는 적을 막습니다. 가로막힌 적은 (?)초 동안 <status>이동 스킬을 사용할 수 없고</status> (?)% <status>둔화</status>되며 <magicDamage>(?)의 마법 피해</magicDamage>를 입습니다.(?)<br /><br />사거리: 400<br />소모값: 50<br />재사용 대기시간: 20/18/16/14/12",
    },
    {
      type: "E",
      src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/PoppyE.png",
      alt: "용감한 돌진 ( 뽀삐 E 스킬 )",
      title: "용감한 돌진",
      description:
        "뽀삐가 하나의 적에게 돌진해 <physicalDamage>(?)의 물리 피해</physicalDamage>를 입히고 앞으로 밀어냅니다. 적이 지형에 부딪히면 적이 1.6/1.7/1.8/1.9/2초 동안 <status>기절</status>하고 <physicalDamage>(?)의 추가 물리 피해</physicalDamage>를 입습니다.(?)<br /><br />사거리: 475<br />소모값: 70<br />재사용 대기시간: 14/13/12/11/10",
    },
    {
      type: "R",
      src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/PoppyR.png",
      alt: "수호자의 심판 ( 뽀삐 R 스킬 )",
      title: "수호자의 심판",
      description:
        "<charge>충전 시작 시:</charge> 뽀삐가 최대 (?)초 동안 망치를 충전하고 (?)% <status>둔화</status>됩니다.<br /><br /><release>사용 시:</release> 뽀삐가 지면에 강력한 일격을 날려 균열을 일으킵니다. 처음 적중한 적 챔피언과 주변 적은 <physicalDamage>(?)의 물리 피해</physicalDamage>를 입고 모두 <status>넥서스 쪽으로</status> <status>밀려나고</status> 공중에 떠오른 적은 대상으로 지정할 수 없게 됩니다. 균열의 길이와 적을 <status>밀어내는</status> 거리는 정신을 충전 시간에 비례합니다.<br /><br />충전하지 않고 바로 사용할 경우 <physicalDamage>(?)의 물리 피해</physicalDamage>를 입히고 적을 (?)초 동안 <status>공중으로</status> 띄워 올립니다.(?)<br /><br />사거리: 500<br />소모값: 100<br />재사용 대기시간: 140/120/100",
    },
  ],
};

/** 2023/06/26 - 특정 챔피언 정보 테스트용 데이터 ( using StoryBook ) - by 1-blue */
export const mocChampion: ApiGetAllChampionResponse = [
  {
    id: "Poppy",
    name: "뽀삐",
    title: "망치의 수호자",
    src: "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Poppy.png",
    info: {
      attack: 6,
      defense: 7,
      magic: 2,
      difficulty: 6,
    },
    stats: {
      hp: 610,
      hpperlevel: 104,
      mp: 280,
      mpperlevel: 40,
      movespeed: 345,
      armor: 38,
      armorperlevel: 4.7,
      spellblock: 32,
      spellblockperlevel: 2.05,
      attackrange: 125,
      hpregen: 8,
      hpregenperlevel: 0.8,
      mpregen: 7,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 64,
      attackdamageperlevel: 4,
      attackspeedperlevel: 2.5,
      attackspeed: 0.625,
    },
    tags: ["Tank", "Fighter"],
  },
];

/** 특정 아이템의 정보 가짜 데이터 */
export const mocItems: ApiGetItemResponse[] = [
  {
    id: "3091",
    name: "마법사의 최후",
    description:
      "<mainText><stats>공격력 <attention>40</attention><br>공격 속도 <attention>40%</attention><br>마법 저항력 <attention>40</attention></stats><br><li><passive>난투:</passive> 기본 공격 적중 시 마법 피해를 입히고 이동 속도가 상승합니다.</mainText><br>",
    plaintext: "마법 피해를 견디고 체력을 회복합니다.",
    colloq: ["위치엔드", "wit", "end"],
    imageSrc:
      "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/3091.png",
    gold: {
      total: 3200,
      sell: 2240,
    },
    totalDescription:
      "마법 피해를 견디고 체력을 회복합니다.<br /><br /><mainText><stats>공격력 <attention>40</attention><br>공격 속도 <attention>40%</attention><br>마법 저항력 <attention>40</attention></stats><br><li><passive>난투:</passive> 기본 공격 적중 시 마법 피해를 입히고 이동 속도가 상승합니다.</mainText><br>",
  },

  {
    id: "6632",
    name: "신성한 파괴자",
    description:
      "<mainText><stats>공격력 <attention>40</attention><br>체력 <attention>300</attention><br>스킬 가속 <attention>20</attention></stats><li><passive>주문 검:</passive> 스킬을 사용하고 나면 다음 기본 공격 시 추가 피해(<OnHit>적중 시</OnHit> )를 입힙니다. 대상이 챔피언일 경우 체력을 회복합니다.<br><br><rarityMythic>신화급 기본 지속 효과:</rarityMythic> 다른 모든 <rarityLegendary>전설급</rarityLegendary> 아이템에 방어구 관통력 및 마법 관통력.<br></mainText><br>",
    plaintext: "",
    colloq: [],
    imageSrc:
      "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/item/6632.png",
    gold: {
      total: 3300,
      sell: 2310,
    },
    totalDescription:
      "<mainText><stats>공격력 <attention>40</attention><br>체력 <attention>300</attention><br>스킬 가속 <attention>20</attention></stats><li><passive>주문 검:</passive> 스킬을 사용하고 나면 다음 기본 공격 시 추가 피해(<OnHit>적중 시</OnHit> )를 입힙니다. 대상이 챔피언일 경우 체력을 회복합니다.<br><br><rarityMythic>신화급 기본 지속 효과:</rarityMythic> 다른 모든 <rarityLegendary>전설급</rarityLegendary> 아이템에 방어구 관통력 및 마법 관통력.<br></mainText><br>",
  },
];

/** 특정 스펠의 정보 가짜 데이터 */
export const mocSpells: ApiGetSpellResponse[] = [
  {
    id: "SummonerFlash",
    name: "점멸",
    description:
      "커서 방향으로 챔피언이 짧은 거리를 순간이동합니다.\n\n사거리: 425\n쿨타임: 300초",
    imageSrc:
      "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/SummonerFlash.png",
    key: "4",
  },
  {
    id: "SummonerTeleport",
    name: "순간이동",
    description:
      "4초 동안 정신을 집중한 다음, 대상으로 지정한 아군 구조물로 순간이동합니다. 14분에 강력 순간이동으로 업그레이드됩니다. 강력 순간이동은 아군 구조물, 미니언, 혹은 와드를 대상으로 지정할 수 있습니다.\n\n사거리: 25000\n쿨타임: 360초",
    imageSrc:
      "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/spell/SummonerTeleport.png",
    key: "12",
  },
];

/** 특정 소환사 전적들 가짜 데이터 */
export const mocSummonerRecords: ApiGetMatchesResponse = [
  {
    info: {
      id: 6570034822,
      mode: "솔로랭크",
      win: false,
      time: {
        start: 1688203457844,
        end: 1688205024147,
        play: 1566303,
      },
    },
    player: {
      info: {
        name: "Akaps",
        position: "TOP",
        lane: "TOP",
      },
      champion: {
        name: "Camille",
        level: 14,
        imageSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Camille.png",
      },
      scores: {
        kda: 1.33,
        kills: 7,
        assists: 1,
        deaths: 6,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        cs: {
          minion: 194,
          jungle: 4,
          average: 7.6,
        },
      },
      spellKeys: [4, 12],
      itemIds: [1055, 6632, 3158, 3074, 3123, 3133, 3363, 17],
    },
    redTeam: [
      {
        summoner: {
          name: "미르모",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Nasus",
          level: 15,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Nasus.png",
        },
      },
      {
        summoner: {
          name: "End the Lily",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "Belveth",
          level: 15,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Belveth.png",
        },
      },
      {
        summoner: {
          name: "무자비한 춘식이",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Orianna",
          level: 15,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Orianna.png",
        },
      },
      {
        summoner: {
          name: "대황란",
          position: "BOTTOM",
          lane: "MIDDLE",
        },
        champion: {
          name: "MissFortune",
          level: 15,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/MissFortune.png",
        },
      },
      {
        summoner: {
          name: "AUSSIEMAN",
          position: "UTILITY",
          lane: "MIDDLE",
        },
        champion: {
          name: "Blitzcrank",
          level: 12,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Blitzcrank.png",
        },
      },
    ],
    blueTeam: [
      {
        summoner: {
          name: "Akaps",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Camille",
          level: 14,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Camille.png",
        },
      },
      {
        summoner: {
          name: "음식물쓰레기게임",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "LeeSin",
          level: 12,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/LeeSin.png",
        },
      },
      {
        summoner: {
          name: "한번더기회드려요",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Galio",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Galio.png",
        },
      },
      {
        summoner: {
          name: "mmmnmmmmnnmn",
          position: "BOTTOM",
          lane: "BOTTOM",
        },
        champion: {
          name: "Cassiopeia",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Cassiopeia.png",
        },
      },
      {
        summoner: {
          name: "전기문 ",
          position: "UTILITY",
          lane: "BOTTOM",
        },
        champion: {
          name: "Morgana",
          level: 11,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Morgana.png",
        },
      },
    ],
  },
  {
    info: {
      id: 6569977924,
      mode: "솔로랭크",
      win: true,
      time: {
        start: 1688201605549,
        end: 1688202964746,
        play: 1359197,
      },
    },
    player: {
      info: {
        name: "Akaps",
        position: "TOP",
        lane: "TOP",
      },
      champion: {
        name: "Kennen",
        level: 15,
        imageSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kennen.png",
      },
      scores: {
        kda: 12,
        kills: 5,
        assists: 7,
        deaths: 0,
        doubleKills: 1,
        tripleKills: 1,
        quadraKills: 0,
        pentaKills: 0,
        cs: {
          minion: 176,
          jungle: 4,
          average: 7.9,
        },
      },
      spellKeys: [4, 12],
      itemIds: [3020, 3135, 3152, 2055, 1052, 1055, 3363, 18],
    },
    redTeam: [
      {
        summoner: {
          name: "xpantom",
          position: "TOP",
          lane: "MIDDLE",
        },
        champion: {
          name: "KSante",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/KSante.png",
        },
      },
      {
        summoner: {
          name: "고정선하이",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "Maokai",
          level: 11,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Maokai.png",
        },
      },
      {
        summoner: {
          name: "DEL02130219",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "MonkeyKing",
          level: 12,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/MonkeyKing.png",
        },
      },
      {
        summoner: {
          name: "EDG Vlper fan",
          position: "BOTTOM",
          lane: "BOTTOM",
        },
        champion: {
          name: "Samira",
          level: 11,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Samira.png",
        },
      },
      {
        summoner: {
          name: "야 화",
          position: "UTILITY",
          lane: "BOTTOM",
        },
        champion: {
          name: "Blitzcrank",
          level: 10,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Blitzcrank.png",
        },
      },
    ],
    blueTeam: [
      {
        summoner: {
          name: "Akaps",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Kennen",
          level: 15,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kennen.png",
        },
      },
      {
        summoner: {
          name: "박제진",
          position: "JUNGLE",
          lane: "TOP",
        },
        champion: {
          name: "Zac",
          level: 14,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Zac.png",
        },
      },
      {
        summoner: {
          name: "데일리야",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Yasuo",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Yasuo.png",
        },
      },
      {
        summoner: {
          name: "뭘해도지는아이흑",
          position: "BOTTOM",
          lane: "BOTTOM",
        },
        champion: {
          name: "MissFortune",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/MissFortune.png",
        },
      },
      {
        summoner: {
          name: "지니와 윌럼프",
          position: "UTILITY",
          lane: "BOTTOM",
        },
        champion: {
          name: "Seraphine",
          level: 11,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Seraphine.png",
        },
      },
    ],
  },
  {
    info: {
      id: 6569913578,
      mode: "솔로랭크",
      win: false,
      time: {
        start: 1688199382426,
        end: 1688201207675,
        play: 1825249,
      },
    },
    player: {
      info: {
        name: "Akaps",
        position: "TOP",
        lane: "TOP",
      },
      champion: {
        name: "Jax",
        level: 16,
        imageSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jax.png",
      },
      scores: {
        kda: 1.08,
        kills: 11,
        assists: 3,
        deaths: 13,
        doubleKills: 2,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        cs: {
          minion: 189,
          jungle: 0,
          average: 6.2,
        },
      },
      spellKeys: [4, 12],
      itemIds: [3157, 3091, 3111, 3067, 3133, 6632, 3340, 30],
    },
    redTeam: [
      {
        summoner: {
          name: "Akaps",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Jax",
          level: 16,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jax.png",
        },
      },
      {
        summoner: {
          name: "비뇨의학 원숭이",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "LeeSin",
          level: 16,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/LeeSin.png",
        },
      },
      {
        summoner: {
          name: "SloppyWalrusX",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Gragas",
          level: 16,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Gragas.png",
        },
      },
      {
        summoner: {
          name: "뚜 찌",
          position: "BOTTOM",
          lane: "MIDDLE",
        },
        champion: {
          name: "Ezreal",
          level: 16,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Ezreal.png",
        },
      },
      {
        summoner: {
          name: "크리스토퍼 니센",
          position: "UTILITY",
          lane: "MIDDLE",
        },
        champion: {
          name: "Nautilus",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Nautilus.png",
        },
      },
    ],
    blueTeam: [
      {
        summoner: {
          name: "xooooxs",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Kennen",
          level: 18,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kennen.png",
        },
      },
      {
        summoner: {
          name: "chulslife",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "RekSai",
          level: 18,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/RekSai.png",
        },
      },
      {
        summoner: {
          name: "태일 김",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Akshan",
          level: 17,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Akshan.png",
        },
      },
      {
        summoner: {
          name: "왼쪽톡톡이",
          position: "BOTTOM",
          lane: "TOP",
        },
        champion: {
          name: "Jinx",
          level: 15,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jinx.png",
        },
      },
      {
        summoner: {
          name: "코즈벨",
          position: "UTILITY",
          lane: "TOP",
        },
        champion: {
          name: "Velkoz",
          level: 14,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Velkoz.png",
        },
      },
    ],
  },
  {
    info: {
      id: 6569856787,
      mode: "솔로랭크",
      win: true,
      time: {
        start: 1688197659342,
        end: 1688199123463,
        play: 1464121,
      },
    },
    player: {
      info: {
        name: "Akaps",
        position: "TOP",
        lane: "TOP",
      },
      champion: {
        name: "Yone",
        level: 16,
        imageSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Yone.png",
      },
      scores: {
        kda: 5,
        kills: 4,
        assists: 6,
        deaths: 2,
        doubleKills: 0,
        tripleKills: 0,
        quadraKills: 0,
        pentaKills: 0,
        cs: {
          minion: 218,
          jungle: 9,
          average: 9.3,
        },
      },
      spellKeys: [4, 12],
      itemIds: [6672, 3181, 1037, 1018, 3006, 1054, 3363, 19],
    },
    redTeam: [
      {
        summoner: {
          name: "단면 1차 모멘트",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Malphite",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Malphite.png",
        },
      },
      {
        summoner: {
          name: "밤을 새우지 않다",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "LeeSin",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/LeeSin.png",
        },
      },
      {
        summoner: {
          name: "Xlszc",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Katarina",
          level: 14,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Katarina.png",
        },
      },
      {
        summoner: {
          name: "빅딜권지태0",
          position: "BOTTOM",
          lane: "BOTTOM",
        },
        champion: {
          name: "Jinx",
          level: 12,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Jinx.png",
        },
      },
      {
        summoner: {
          name: "SongGoon",
          position: "UTILITY",
          lane: "BOTTOM",
        },
        champion: {
          name: "Milio",
          level: 11,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Milio.png",
        },
      },
    ],
    blueTeam: [
      {
        summoner: {
          name: "Akaps",
          position: "TOP",
          lane: "TOP",
        },
        champion: {
          name: "Yone",
          level: 16,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Yone.png",
        },
      },
      {
        summoner: {
          name: "한지민 팬이야",
          position: "JUNGLE",
          lane: "JUNGLE",
        },
        champion: {
          name: "Karthus",
          level: 14,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Karthus.png",
        },
      },
      {
        summoner: {
          name: "불리해 아직",
          position: "MIDDLE",
          lane: "MIDDLE",
        },
        champion: {
          name: "Zoe",
          level: 13,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Zoe.png",
        },
      },
      {
        summoner: {
          name: "성수동 김승환",
          position: "BOTTOM",
          lane: "BOTTOM",
        },
        champion: {
          name: "Kaisa",
          level: 14,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Kaisa.png",
        },
      },
      {
        summoner: {
          name: "자 두",
          position: "UTILITY",
          lane: "BOTTOM",
        },
        champion: {
          name: "Lulu",
          level: 11,
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/Lulu.png",
        },
      },
    ],
  },
];
