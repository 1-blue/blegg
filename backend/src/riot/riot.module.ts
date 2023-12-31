import { Module } from "@nestjs/common";

import { AccountModule } from "./account/account.module";
import { SummonerModule } from "./summoner/summoner.module";
import { MatchModule } from "./match/match.module";
import { ChampionModule } from "./champion/champion.module";
import { ItemModule } from "./item/item.module";
import { SpellModule } from "./spell/spell.module";
import { LeagueModule } from "./league/league.module";

@Module({
  imports: [
    AccountModule,
    SummonerModule,
    MatchModule,
    ChampionModule,
    ItemModule,
    SpellModule,
    LeagueModule,
  ],
})
export class RiotModule {}
