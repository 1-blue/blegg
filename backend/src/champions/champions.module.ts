import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { ChampionsController } from "./champions.controller";
import { ChampionsService } from "./champions.service";

@Module({
  imports: [HttpModule.register({ timeout: 1000 })],
  controllers: [ChampionsController],
  providers: [ChampionsService],
})
export class ChampionsModule {}
