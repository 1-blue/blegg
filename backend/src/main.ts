import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import * as cookieParser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

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

  // swagger
  const config = new DocumentBuilder()
    .setTitle("Swagger Example")
    .setDescription("Swagger study API description")
    .setVersion("1.0.0")
    .addTag("swagger")
    .addCookieAuth(
      "accessToken",
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "JWT",
        description: "로그인 성공 후 얻는 쿠키속에 있는 토큰 값 입력",
        in: "header",
      },
      "accessToken",
    )
    .addOAuth2()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
