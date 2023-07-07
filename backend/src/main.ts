import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors
  app.enableCors({
    credentials: true,
    origin: ["http://localhost:5173"],
  });

  // pipe
  app.useGlobalPipes(
    new ValidationPipe({
      // 데코레이터를 사용하지 않은 속성 제거
      whitelist: true,
      // 데코레이터를 사용하지 않은 속성이 있다면 예외 발생
      forbidNonWhitelisted: true,
      // 데코레이터에 맞게 자동형변환 실행
      transform: true,
      // disableErrorMessages: true,
    }),
  );

  // cookie
  app.use(cookieParser());

  await app.listen(3050);
}
bootstrap();
