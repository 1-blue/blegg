import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import configuration from "./config/configuration";

import { HelloMiddleware } from "./middlewares/hello.middleware";

import { HelloModule } from "./hello/hello.module";
import { ChampionsModule } from "./champions/champions.module";
import { ChampionModule } from "./champion/champion.module";
import { SummonerModule } from "./summoner/summoner.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
      isGlobal: true,
    }),
    HelloModule,
    ChampionsModule,
    ChampionModule,
    SummonerModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelloMiddleware).forRoutes("hello");
  }
}
