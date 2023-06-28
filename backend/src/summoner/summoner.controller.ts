import { Controller, Get, Param } from "@nestjs/common";
import { SummonerService } from "./summoner.service";

@Controller("summoner")
export class SummonerController {
  private summonerService: SummonerService;

  constructor(summonerService: SummonerService) {
    this.summonerService = summonerService;
  }

  @Get(":name")
  async findSummoner(@Param() { name }: { name: string }) {
    return this.summonerService.findSummoner({ name });
  }
}
