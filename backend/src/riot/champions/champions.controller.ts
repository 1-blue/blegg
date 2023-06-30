import { Controller, Get } from "@nestjs/common";

import { ChampionsService } from "./champions.service";

import type { ApiResponseChampions } from "./interfaces/champions.interface";

@Controller("riot/champions")
export class ChampionsController {
  private championsService: ChampionsService;

  constructor(championsService: ChampionsService) {
    this.championsService = championsService;
  }

  @Get()
  async get(): Promise<ApiResponseChampions> {
    return this.championsService.get();
  }
}
