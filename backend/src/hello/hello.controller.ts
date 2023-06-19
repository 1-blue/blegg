import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { CreateHelloDto } from "./dto/create-hello.dto";
import { HelloService } from "./hello.service";

@Controller("hello")
export class HelloController {
  private helloService: HelloService;

  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() hello: CreateHelloDto): Promise<void> {
    this.helloService.create(hello);
  }

  @Get()
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
