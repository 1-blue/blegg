import { Controller, Get, Param } from "@nestjs/common";

import { ChampionService } from "./champion.service";
import { ApiResponseChampion } from "./interface/champions.interface";
import { ApiResponseDetailChampion } from "./interface/champion.interface";

@Controller("riot/champion")
export class ChampionController {
  private championService: ChampionService;

  constructor(championService: ChampionService) {
    this.championService = championService;
  }

  @Get()
  async findAll(): Promise<ApiResponseChampion[]> {
    return this.championService.findAll();
  }

  @Get(":name")
  async findOne(
    @Param("name") name: string,
  ): Promise<ApiResponseDetailChampion> {
    return this.championService.findOne(name);
  }
}
