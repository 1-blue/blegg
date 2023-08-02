import { Module } from "@nestjs/common";

import { ChampionController } from "./champion.controller";
import { ChampionService } from "./champion.service";

@Module({
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
