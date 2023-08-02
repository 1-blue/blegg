import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse } from "@nestjs/swagger";

import { LeagueService } from "./league.service";

@Controller("riot/league")
@ApiTags("Riot API")
export class LeagueController {
  private leagueService: LeagueService;
  constructor(leagueService: LeagueService) {
    this.leagueService = leagueService;
  }

  /** 2023/07/24 - 솔로랭크 챌린저 티어 유저들 정보 요청 - by 1-blue */
  @Get("challenger")
  @ApiOperation({
    summary: "솔로랭크 챌린저 티어 유저들 정보 요청",
    description: `솔로랭크 챌린저 티어 유저들 정보를 얻는 API ( [참고 라이엇 API](https://developer.riotgames.com/apis#league-v4/GET_getChallengerLeague) )`,
  })
  @ApiResponse({
    status: 200,
    description: "솔로랭크 챌린저 티어 유저들 정보 반환",
    schema: {
      example: [
        {
          tier: "CHALLENGER",
          summonerName: "땅굴팀 미드",
          rank: "I",
          leaguePoints: 755,
          wins: 78,
          losses: 50,
        },
        {
          tier: "CHALLENGER",
          summonerName: "나는 바보다",
          rank: "I",
          leaguePoints: 685,
          wins: 67,
          losses: 38,
        },
      ],
    },
  })
  async findChallenger() {
    return this.leagueService.findLeagues("challenger");
  }

  /** 2023/07/24 - 솔로랭크 그랜드마스터 티어 유저들 정보 요청 - by 1-blue */
  @Get("grandmaster")
  @ApiOperation({
    summary: "솔로랭크 그랜드마스터 티어 유저들 정보 요청",
    description: `솔로랭크 그랜드마스터 티어 유저들 정보를 얻는 API ( [참고 라이엇 API](https://developer.riotgames.com/apis#league-v4/GET_getGrandmasterLeague) )`,
  })
  @ApiResponse({
    status: 200,
    description: "솔로랭크 그랜드마스터 티어 유저들 정보 반환",
    schema: {
      example: [
        {
          tier: "GRANDMASTER",
          summonerName: "zenmewan",
          rank: "I",
          leaguePoints: 520,
          wins: 80,
          losses: 63,
        },
        {
          tier: "GRANDMASTER",
          summonerName: "Let me sup",
          rank: "I",
          leaguePoints: 509,
          wins: 105,
          losses: 91,
        },
      ],
    },
  })
  async findGrandmaster() {
    return this.leagueService.findLeagues("grandmaster");
  }

  /** 2023/07/24 - 솔로랭크 마스터 티어 유저들 정보 요청 - by 1-blue */
  @Get("master")
  @ApiOperation({
    summary: "솔로랭크 마스터 티어 유저들 정보 요청",
    description: `솔로랭크 마스터 티어 유저들 정보를 얻는 API ( [참고 라이엇 API](https://developer.riotgames.com/apis#league-v4/GET_getMasterLeague) )`,
  })
  @ApiResponse({
    status: 200,
    description: "솔로랭크 마스터 티어 유저들 정보 반환",
    schema: {
      example: [
        {
          tier: "MASTER",
          summonerName: "스물다섯번쩨밤",
          rank: "I",
          leaguePoints: 313,
          wins: 75,
          losses: 60,
        },
        {
          tier: "MASTER",
          summonerName: "xiaobinOvO",
          rank: "I",
          leaguePoints: 264,
          wins: 127,
          losses: 113,
        },
      ],
    },
  })
  async findMaster() {
    return this.leagueService.findLeagues("master");
  }
}
