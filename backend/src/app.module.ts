import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";

import configuration from "./config/configuration";

import { HelloMiddleware } from "./middlewares/hello.middleware";

import { PrismaModule } from "./prisma/prisma.module";
import { HelloModule } from "./hello/hello.module";
import { RiotModule } from "./riot/riot.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { PresignedurlModule } from "./presignedurl/presignedurl.module";

@Module({
  imports: [
    // config ( 환경변수 )
    ConfigModule.forRoot({
      load: [configuration],
      cache: true,
      isGlobal: true,
    }),
    // httpService 전역적으로 주입 ( axios ) FIXME: /riot의 그룹에만 주입하는 방법 찾아보기
    {
      ...HttpModule.register({ timeout: 1000 }),
      global: true,
    },
    PrismaModule,
    HelloModule,
    RiotModule,
    AuthModule,
    UserModule,
    PostModule,
    PresignedurlModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelloMiddleware).forRoutes("hello");
  }
}
