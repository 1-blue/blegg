import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

import { SummonerService } from "./summoner.service";

@Controller("riot/summoner")
@ApiTags("Riot API")
export class SummonerController {
  private readonly summonerService: SummonerService;

  constructor(summonerService: SummonerService) {
    this.summonerService = summonerService;
  }

  /** 2023/06/29 - 특정 소환사 정보 및 솔로/자유랭크 정보 얻기 - by 1-blue */
  @Get(":name")
  @ApiOperation({
    summary: "특정 소환사 정보 및 솔로/자유랭크 정보 얻기",
    description: `특정 소환사 정보 및 솔로/자유랭크 정보 얻는 API ( [참고 라이엇 API](https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesForSummoner) )`,
  })
  @ApiParam({
    name: "name",
    description: "검색할 소환사 이름",
    type: "string",
    example: "Akaps",
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 소환사에 대한 정보 반환",
    schema: {
      example: {
        info: {
          name: "민계식",
          level: 80,
          profileIconSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/profileicon/5590.png",
        },
        soloRank: {
          tier: "SILVER",
          rank: "III",
          leaguePoints: 58,
          wins: 4,
          losses: 4,
        },
        freeRank: {
          tier: "PLATINUM",
          rank: "III",
          leaguePoints: 0,
          wins: 7,
          losses: 15,
        },
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: "존재하지 않는 소환사",
    schema: {
      example: {
        message: "존재하지 않는 소환사입니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findSummonerByName(@Param("name") name: string) {
    return this.summonerService.findByName(name);
  }
}
