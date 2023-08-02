import { Body, Controller, Post } from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiOkResponse,
  ApiForbiddenResponse,
} from "@nestjs/swagger";

import { UserService } from "./user.service";

import { ValidateUserDto } from "./dto/validate-user.dto";

@Controller("user")
@ApiTags("User API")
export class UserController {
  private readonly userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  /** 2023/07/07 - 유저 유효성 검사 ( id, password 일치 유저 탐색 ) - by 1-blue */
  @Post("validate")
  @ApiOperation({
    summary: "유저 유효성 검사",
    description: `유저 유효성 검사 API`,
  })
  @ApiOkResponse({
    description: "유효한 유저",
    schema: {
      example: {
        idx: 10,
        id: "1blue",
        nickname: "나의 개발일지",
        summonerName: "나의 개발일지",
        avatar:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
        provider: "local",
        snsId: null,
      },
    },
  })
  @ApiForbiddenResponse({
    description: "존재하지 않는 유저 or 비밀번호 불일치",
    schema: {
      example: {
        message: "존재하지 않는 유저입니다!",
        error: "Forbidden",
        statusCode: 403,
      },
    },
  })
  async validateUser(@Body() body: ValidateUserDto) {
    return this.userService.validateUser(body);
  }
}
