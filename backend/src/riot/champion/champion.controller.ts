import { Controller, Get, Param } from "@nestjs/common";

import { ChampionService } from "./champion.service";

import type { ApiResponseChampion } from "./interface/champion.interface";

@Controller("riot/champion")
export class ChampionController {
  private championService: ChampionService;

  constructor(championService: ChampionService) {
    this.championService = championService;
  }

  @Get(":name")
  async get(@Param("name") name: string): Promise<ApiResponseChampion> {
    return this.championService.get(name);
  }
}
