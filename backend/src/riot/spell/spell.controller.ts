import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

import { LANGUAGE, VERSION } from "src/libs";

import { SpellService } from "./spell.service";

import type { ApiResponseSpell } from "./interface/spell.interface";

@Controller("riot/spell")
@ApiTags("Riot API")
export class SpellController {
  private readonly spellService: SpellService;
  constructor(spellService: SpellService) {
    this.spellService = spellService;
  }

  /** 2023/06/30 - 모든 스펠 정보 얻기 - by 1-blue */
  @Get()
  @ApiOperation({
    summary: "모든 스펠 정보 얻기",
    description: `모든 스펠 정보 얻는 API ( [참고 라이엇 API](https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANGUAGE}/summoner.json) )`,
  })
  @ApiResponse({
    status: 200,
    description: "모든 스펠 정보 반환",
    schema: {
      example: [
        {
          id: "SummonerBarrier",
          name: "방어막",
          description:
            "2초 동안 방어막으로 감싸 피해를 105~411(챔피언 레벨에 따라 변동)만큼 흡수합니다.\n\n사거리: 1200\n쿨타임: 180초",
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/SummonerBarrier.png",
          key: "21",
        },
        {
          id: "SummonerBoost",
          name: "정화",
          description:
            "챔피언에 걸린 모든 이동 불가와 (제압 및 공중으로 띄우는 효과 제외) 소환사 주문에 의한 해로운 효과를 제거하고 새로 적용되는 이동 불가 효과들의 지속시간을 3초간 65% 감소시킵니다.\n\n사거리: 200\n쿨타임: 210초",
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/SummonerBoost.png",
          key: "1",
        },
      ],
    },
  })
  async findAll(): Promise<ApiResponseSpell[]> {
    return this.spellService.findAll();
  }

  /** 2023/06/30 - 특정 스펠 정보 얻기 - by 1-blue */
  @Get(":key")
  @ApiOperation({
    summary: "특정 스펠 정보 얻기",
    description: `특정 스펠 정보 얻는 API ( [참고 라이엇 API](https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANGUAGE}/summoner.json) )`,
  })
  @ApiParam({
    name: "key",
    description: "스펠 식별자 ( 라이엇에서 정한 식별자 )",
    type: "string",
    examples: {
      방어막: { value: "21" },
      정화: { value: "1" },
    },
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 스펠 정보 반환",
    schema: {
      example: {
        id: "SummonerBarrier",
        name: "방어막",
        description:
          "2초 동안 방어막으로 감싸 피해를 105~411(챔피언 레벨에 따라 변동)만큼 흡수합니다.\n\n사거리: 1200\n쿨타임: 180초",
        imageSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/SummonerBarrier.png",
        key: "21",
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: "존재하지 않는 스펠",
    schema: {
      example: {
        message: "존재하지 않는 스펠입니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findOne(@Param("key") key: string): Promise<ApiResponseSpell> {
    return this.spellService.findOne(key);
  }
}
