import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { ChampionController } from "./champion.controller";
import { ChampionService } from "./champion.service";

@Module({
  imports: [HttpModule.register({ timeout: 1000 })],
  controllers: [ChampionController],
  providers: [ChampionService],
})
export class ChampionModule {}
