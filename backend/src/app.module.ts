import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";

import { HelloModule } from "./hello/hello.module";
import { HelloMiddleware } from "./middlewares/hello.middleware";

@Module({
  imports: [HelloModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelloMiddleware).forRoutes("hello");
  }
}
