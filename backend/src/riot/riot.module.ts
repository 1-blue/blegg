import { Module } from "@nestjs/common";

import { AccountModule } from "./account/account.module";
import { SummonerModule } from "./summoner/summoner.module";
import { MatchModule } from "./match/match.module";
import { ChampionModule } from "./champion/champion.module";
import { ChampionsModule } from "./champions/champions.module";

@Module({
  imports: [
    AccountModule,
    SummonerModule,
    MatchModule,
    ChampionModule,
    ChampionsModule,
  ],
})
export class RiotModule {}
