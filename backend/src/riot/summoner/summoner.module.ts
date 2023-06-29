import { Module } from "@nestjs/common";

import { SummonerController } from "./summoner.controller";

import { AccountService } from "../account/account.service";
import { SummonerService } from "./summoner.service";

@Module({
  controllers: [SummonerController],
  providers: [AccountService, SummonerService],
})
export class SummonerModule {}
