import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import type { Prisma } from "@prisma/client";

import { UserService } from "./user.service";

import { CreateUserDto } from "./dto/create-user.dto";
import { ValidateUserDto } from "./dto/validate-user.dto";

@Controller("user")
export class UserController {
  private readonly userService: UserService;
  constructor(userService: UserService) {
    this.userService = userService;
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @Post("validate")
  async validateUser(@Body() body: ValidateUserDto) {
    return this.userService.validateUser(body);
  }

  @Get()
  async findOne(@Param() body: Prisma.UserWhereUniqueInput) {
    return this.userService.findOne(body);
  }
}
