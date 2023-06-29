import { Module } from "@nestjs/common";

import { AccountModule } from "./account/account.module";
import { SummonerModule } from "./summoner/summoner.module";
import { MatchModule } from "./match/match.module";

@Module({
  imports: [AccountModule, SummonerModule, MatchModule],
})
export class RiotModule {}
