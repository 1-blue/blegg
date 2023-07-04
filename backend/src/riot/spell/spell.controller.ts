import { Controller, Get, Param } from "@nestjs/common";

import { SpellService } from "./spell.service";

import type { ApiResponseSpell } from "./interface/spell.interface";

@Controller("riot/spell")
export class SpellController {
  private readonly spellService: SpellService;
  constructor(spellService: SpellService) {
    this.spellService = spellService;
  }

  @Get(":key")
  async findOne(@Param("key") key: string): Promise<ApiResponseSpell> {
    return this.spellService.findOne(key);
  }

  @Get()
  async findAll(): Promise<ApiResponseSpell[]> {
    return this.spellService.findAll();
  }
}
