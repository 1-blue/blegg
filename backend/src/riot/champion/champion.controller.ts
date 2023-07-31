import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

import { LANGUAGE, VERSION } from "src/libs";

import { ChampionService } from "./champion.service";
import { ApiResponseChampion } from "./interface/champions.interface";
import { ApiResponseDetailChampion } from "./interface/champion.interface";

@Controller("riot/champion")
@ApiTags("Riot API")
export class ChampionController {
  private championService: ChampionService;

  constructor(championService: ChampionService) {
    this.championService = championService;
  }

  /** 2023/07/02 - 모든 챔피언 정보 요청 - by 1-blue */
  @Get()
  @ApiOperation({
    summary: "모든 챔피언 정보 요청",
    description: `모든 챔피언에 대한 정보를 얻는 API ( [참고 라이엇 API](https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANGUAGE}/champion.json) )`,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 모든 챔피언들에 대한 정보 반환",
    schema: {
      example: [
        {
          id: "Aatrox",
          name: "아트록스",
          title: "다르킨의 검",
          src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Aatrox.png",
          info: {
            attack: 8,
            defense: 4,
            magic: 3,
            difficulty: 4,
          },
          stats: {
            hp: 650,
            hpperlevel: 114,
            mp: 0,
            mpperlevel: 0,
            movespeed: 345,
            armor: 38,
            armorperlevel: 4.45,
            spellblock: 32,
            spellblockperlevel: 2.05,
            attackrange: 175,
            hpregen: 3,
            hpregenperlevel: 1,
            mpregen: 0,
            mpregenperlevel: 0,
            crit: 0,
            critperlevel: 0,
            attackdamage: 60,
            attackdamageperlevel: 5,
            attackspeedperlevel: 2.5,
            attackspeed: 0.651,
          },
          tags: ["Fighter", "Tank"],
        },
        {
          id: "Ahri",
          name: "아리",
          title: "구미호",
          src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ahri.png",
          info: {
            attack: 3,
            defense: 4,
            magic: 8,
            difficulty: 5,
          },
          stats: {
            hp: 590,
            hpperlevel: 96,
            mp: 418,
            mpperlevel: 25,
            movespeed: 330,
            armor: 21,
            armorperlevel: 4.7,
            spellblock: 30,
            spellblockperlevel: 1.3,
            attackrange: 550,
            hpregen: 2.5,
            hpregenperlevel: 0.6,
            mpregen: 8,
            mpregenperlevel: 0.8,
            crit: 0,
            critperlevel: 0,
            attackdamage: 53,
            attackdamageperlevel: 3,
            attackspeedperlevel: 2,
            attackspeed: 0.668,
          },
          tags: ["Mage", "Assassin"],
        },
      ],
    },
  })
  async findAll(): Promise<ApiResponseChampion[]> {
    return this.championService.findAll();
  }

  @Get(":name")
  @ApiOperation({
    summary: "특정 챔피언 상세 정보 요청",
    description: `모든 챔피언에 대한 정보를 얻는 API ( [참고 라이엇 API](https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANGUAGE}/champion.json) )`,
  })
  @ApiParam({
    name: "name",
    description: "검색할 챔피언 이름",
    type: "string",
    examples: {
      아트록스: { value: "Aatrox" },
      아리: { value: "Ahri" },
      아칼리: { value: "Akali" },
    },
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 소환사에 대한 정보 반환",
    schema: {
      example: {
        id: "Aatrox",
        name: "아트록스",
        title: "다르킨의 검",
        allytips: [
          "공격 성공률을 높이려면 다르킨의 검을 사용하는 동안 파멸의 돌진을 사용하세요.",
          "지옥사슬 같은 군중 제어 스킬이나 아군의 이동 불가 효과를 통해 다르킨의 검을 쉽게 적중시킬 수 있습니다.",
          "전투를 시작할 준비가 되면 세계의 종결자를 사용하세요.",
        ],
        enemytips: [
          "아트록스의 공격은 미리 표시되므로 공격이 예상되는 지역에서 벗어나세요.",
          "아트록스를 향해 이동하거나 양옆으로 이동하면 지옥사슬에서 더 쉽게 벗어날 수 있습니다.",
          "아트록스가 궁극기를 사용하면 부활하지 못하도록 거리를 유지하세요.",
        ],
        stats: {
          hp: 650,
          hpperlevel: 114,
          mp: 0,
          mpperlevel: 0,
          movespeed: 345,
          armor: 38,
          armorperlevel: 4.45,
          spellblock: 32,
          spellblockperlevel: 2.05,
          attackrange: 175,
          hpregen: 3,
          hpregenperlevel: 1,
          mpregen: 0,
          mpregenperlevel: 0,
          crit: 0,
          critperlevel: 0,
          attackdamage: 60,
          attackdamageperlevel: 5,
          attackspeedperlevel: 2.5,
          attackspeed: 0.651,
        },
        info: {
          attack: 8,
          defense: 4,
          magic: 3,
          difficulty: 4,
        },
        skins: [
          {
            id: "266000",
            name: "default",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg",
          },
          {
            id: "266001",
            name: "정의의 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_1.jpg",
          },
          {
            id: "266002",
            name: "메카 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_2.jpg",
          },
          {
            id: "266003",
            name: "바다 사냥꾼 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_3.jpg",
          },
          {
            id: "266007",
            name: "핏빛달 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_7.jpg",
          },
          {
            id: "266008",
            name: "프레스티지 핏빛달 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_8.jpg",
          },
          {
            id: "266009",
            name: "승리의 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_9.jpg",
          },
          {
            id: "266011",
            name: "오디세이 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_11.jpg",
          },
          {
            id: "266020",
            name: "프레스티지 핏빛달 아트록스 (2022)",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_20.jpg",
          },
          {
            id: "266021",
            name: "달을 삼킨 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_21.jpg",
          },
          {
            id: "266030",
            name: "DRX 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_30.jpg",
          },
          {
            id: "266031",
            name: "프레스티지 DRX 아트록스",
            src: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_31.jpg",
          },
        ],
        skills: [
          {
            type: "P",
            src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/passive/Aatrox_Passive.png",
            alt: "사신 태세 ( 아트록스 패시브 )",
            title: "사신 태세",
            description:
              "주기적으로 아트록스의 기본 공격이 대상 최대 체력에 비례하여 추가 <physicalDamage>물리 피해</physicalDamage>를 입히고 자신의 체력을 회복합니다. ",
          },
          {
            type: "Q",
            src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxQ.png",
            alt: "다르킨의 검 ( 아트록스 Q 스킬 )",
            title: "다르킨의 검",
            description:
              "아트록스가 대검을 내리쳐 <physicalDamage>(?)의 물리 피해</physicalDamage>를 입힙니다. 끝에 적중한 적을 잠깐 <status>공중으로</status> 띄워 올리고 <physicalDamage>(?)</physicalDamage>의 피해를 입힙니다. 이 스킬은 두 번 <recast>재사용</recast>할 수 있으며 다시 사용할 때마다 범위 모양이 변하고 이전보다 25% 더 많은 피해를 입힙니다.(?)<br /><br />사거리: 25000<br />소모값: 0<br />재사용 대기시간: 14/12/10/8/6",
          },
          {
            type: "W",
            src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxW.png",
            alt: "지옥사슬 ( 아트록스 W 스킬 )",
            title: "지옥사슬",
            description:
              "아트록스가 사슬을 발사하여 처음 적중한 적을 (?)초 동안 (?)%만큼 <status>둔화</status>시키고 <physicalDamage>(?)의 물리 피해</physicalDamage>를 입힙니다. 챔피언과 대형 정글 몬스터는 (?)초 안에 해당 지역을 벗어나지 않으면 중심으로 <status>끌려가</status> 다시 같은 양의 피해를 입습니다.(?)<br /><br />사거리: 825<br />소모값: 0<br />재사용 대기시간: 20/18/16/14/12",
          },
          {
            type: "E",
            src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxE.png",
            alt: "파멸의 돌진 ( 아트록스 E 스킬 )",
            title: "파멸의 돌진",
            description:
              "<spellPassive>기본 지속 효과:</spellPassive> 아트록스가 챔피언을 상대로 <lifeSteal>(?)%의 모든 피해 흡혈</lifeSteal>을 얻고 <keywordMajor>세계의 종결자</keywordMajor> 사용 중에 <lifeSteal>(?)%의 모든 피해 흡혈</lifeSteal>을 얻습니다.<br /><br /><spellActive>사용 시:</spellActive> 아트록스가 돌진합니다. 이 스킬은 다른 스킬이 진행되는 동안 사용할 수 있습니다.(?)<br /><br />사거리: 25000<br />소모값: 0<br />재사용 대기시간: 9/8/7/6/5",
          },
          {
            type: "R",
            src: "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/AatroxR.png",
            alt: "세계의 종결자 ( 아트록스 R 스킬 )",
            title: "세계의 종결자",
            description:
              "아트록스가 진정한 악마의 모습을 드러내 근처 미니언이 (?)초 동안 <status>공포</status>에 떨게 하고 <speed>이동 속도가 (?)%</speed> 증가했다가 (?)초에 걸쳐 원래대로 돌아옵니다. 지속시간 동안 <scaleAD>공격력이 (?)%</scaleAD>, <healing>자신에 대한 체력 회복 효과가 (?)%</healing> 증가합니다.<br /><br />챔피언 처치 관여 시 이 효과의 지속시간이 (?)초 늘어나고 <speed>이동 속도</speed> 효과가 초기화됩니다.(?)<br /><br />사거리: 25000<br />소모값: 0<br />재사용 대기시간: 120/100/80",
          },
        ],
      },
    },
  })
  async findOne(
    @Param("name") name: string,
  ): Promise<ApiResponseDetailChampion> {
    return this.championService.findOne(name);
  }
}
