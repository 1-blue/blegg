import { Controller, Get, Param } from "@nestjs/common";

import { SummonerService } from "./summoner.service";

@Controller("riot/summoner")
export class SummonerController {
  private readonly summonerService: SummonerService;

  constructor(summonerService: SummonerService) {
    this.summonerService = summonerService;
  }

  @Get(":name")
  async findSummonerByName(@Param("name") name: string) {
    return this.summonerService.findByName(name);
  }
}
