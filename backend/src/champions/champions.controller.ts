import { Controller, Get } from "@nestjs/common";

import { ChampionsService } from "./champions.service";

import type { Champions } from "./interfaces/champions.interface";

@Controller("champions")
export class ChampionsController {
  private championsService: ChampionsService;

  constructor(championsService: ChampionsService) {
    this.championsService = championsService;
  }

  @Get()
  async get(): Promise<Champions> {
    return this.championsService.get();
  }
}
