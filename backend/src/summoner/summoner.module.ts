import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { SummonerController } from "./summoner.controller";
import { SummonerService } from "./summoner.service";

@Module({
  imports: [HttpModule.register({ timeout: 1000 })],
  controllers: [SummonerController],
  providers: [SummonerService],
})
export class SummonerModule {}
