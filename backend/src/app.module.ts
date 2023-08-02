import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import configuration from "./config/configuration";

import { HelloMiddleware } from "./middlewares/hello.middleware";

import { PrismaModule } from "./prisma/prisma.module";
import { HelloModule } from "./hello/hello.module";
import { RiotModule } from "./riot/riot.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { PresignedurlModule } from "./presignedurl/presignedurl.module";
import { MeModule } from "./me/me.module";

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
    // React 정적 배포 ( BE가 빌드된 곳을 기준으로 FE 파일 빌드된 경로 입력 )
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "..", "..", "frontend", "dist"),
    }),
    PrismaModule,
    HelloModule,
    RiotModule,
    AuthModule,
    UserModule,
    PostModule,
    PresignedurlModule,
    MeModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelloMiddleware).forRoutes("hello");
  }
}
