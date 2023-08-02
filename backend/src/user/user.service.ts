import { Injectable } from "@nestjs/common";
import type { Prisma } from "@prisma/client";

import { UserRepository } from "./user.repository";

import { CreateUserDto } from "./dto/create-user.dto";
import { ValidateUserDto } from "./dto/validate-user.dto";

@Injectable()
export class UserService {
  private readonly userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  /** 2023/07/07 - 유저 생성 ( 회원가입 ) - by 1-blue */
  async createUser(body: CreateUserDto) {
    return this.userRepository.createUser(body);
  }

  /** 2023/07/07 - 유저 유효성 검사 ( id, password 일치 유저 탐색 ) - by 1-blue */
  async validateUser(body: ValidateUserDto) {
    return this.userRepository.validateUser(body);
  }

  /** 2023/07/07 - 유저 찾기 - by 1-blue */
  async findOne(body: Prisma.UserWhereUniqueInput) {
    return this.userRepository.findOne(body);
  }
}
