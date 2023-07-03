import { Controller, Get, Param, Query } from "@nestjs/common";

import { MatchService } from "./match.service";

import { FindManyByNameDto } from "./dto/find-many-by-name.dto";
import type { ApiResponseMatch } from "./interface/find-matches-by-name.interface";

@Controller("riot/match")
export class MatchController {
  private matchService: MatchService;

  constructor(matchService: MatchService) {
    this.matchService = matchService;
  }

  @Get(":name")
  async findManyByName(
    @Param("name") name: string,
    @Query() { start, count }: FindManyByNameDto,
  ): Promise<ApiResponseMatch[]> {
    return this.matchService.findManyByName(name, { start, count });
  }
}
