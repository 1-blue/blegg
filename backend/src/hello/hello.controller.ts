import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
} from "@nestjs/swagger";

import { CreateHelloDto } from "./dto/create-hello.dto";
import { HelloService } from "./hello.service";

@Controller("hello")
@ApiTags("테스트 API")
export class HelloController {
  private helloService: HelloService;
  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  @ApiOperation({
    summary: "테스트 문구 생성",
    description: `테스트 문구 생성 API`,
  })
  @ApiCreatedResponse({
    description: "게시글 생성 성공",
    schema: {
      example: `"GET" "/hello"로 등록한 문구를 확인해보세요!`,
    },
  })
  async create(@Body() hello: CreateHelloDto): Promise<string> {
    this.helloService.create(hello);

    return `"GET" "/hello"로 등록한 문구를 확인해보세요!`;
  }

  @Get()
  @ApiOperation({
    summary: "테스트로 생성된 문구들 가져오기",
    description: `테스트로 생성된 문구들 가져오기 API`,
  })
  @ApiOkResponse({
    description: "테스트로 생성된 문구들 가져오기 성공",
    schema: {
      example: `여기를 찾아온 당신은 개발자...?
      "POST" "/hello" "body" "content: string"으로 메시지를 등록해보세요!
      
      현재 등록된 메시지들
      1. [Swagger] 이거 생성하면 개발자`,
    },
  })
  async sayHello(): Promise<string> {
    const intro = "여기를 찾아온 당신은 개발자...?";
    const description = `"POST" "/hello" "body" "content: string"으로 메시지를 등록해보세요!\n`;
    const subTitle = "현재 등록된 메시지들";
    const hellos = this.helloService
      .findAll()
      .map(({ content }, i) => `${i + 1}. ${content}`);

    return [intro, description, subTitle, ...hellos].join("\n");
  }
}
