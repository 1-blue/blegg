import { Controller, Get, Param } from "@nestjs/common";

import { ChampionService } from "./champion.service";

import type { Champion } from "./interfaces/champion.interface";

@Controller("champion")
export class ChampionController {
  private championService: ChampionService;

  constructor(championService: ChampionService) {
    this.championService = championService;
  }

  @Get(":name")
  async get(@Param() { name }: { name: string }): Promise<Champion> {
    return this.championService.get({ name });
  }
}
