import { Controller, Get } from "@nestjs/common";

import { LeagueService } from "./league.service";

@Controller("riot/league")
export class LeagueController {
  private leagueService: LeagueService;
  constructor(leagueService: LeagueService) {
    this.leagueService = leagueService;
  }

  /** 2023/07/24 - 챌린저 티어 유저 정보 요청 - by 1-blue */
  @Get("challenger")
  async findChallenger() {
    return this.leagueService.findLeagues("challenger");
  }

  /** 2023/07/24 - 그랜드마스터 티어 유저 정보 요청 - by 1-blue */
  @Get("grandmaster")
  async findGrandmaster() {
    return this.leagueService.findLeagues("grandmaster");
  }

  /** 2023/07/24 - 마스터 티어 유저 정보 요청 - by 1-blue */
  @Get("master")
  async findMaster() {
    return this.leagueService.findLeagues("master");
  }
}
