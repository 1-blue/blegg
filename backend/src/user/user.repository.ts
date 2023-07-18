/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { hash, compare } from "bcrypt";
import type { Prisma } from "@prisma/client";

import { convertToIconImageURL } from "src/libs";

import { PrismaService } from "src/prisma/prisma.service";
import { AccountService } from "src/riot/account/account.service";

import { CreateUserDto } from "./dto/create-user.dto";
import { ValidateUserDto } from "./dto/validate-user.dto";

@Injectable()
export class UserRepository {
  private readonly prismaService: PrismaService;
  private readonly accountService: AccountService;
  constructor(prismaService: PrismaService, accountService: AccountService) {
    this.prismaService = prismaService;
    this.accountService = accountService;
  }

  /** 2023/07/07 - 유저 생성 ( 회원가입 ) - by 1-blue */
  async createUser({ id, nickname, password, summonerName }: CreateUserDto) {
    try {
      const [hashedPassword, account] = await Promise.all([
        hash(password, 10),
        summonerName && this.accountService.findByName(summonerName),
      ]);

      const createdUser = await this.prismaService.user.create({
        data: {
          id,
          nickname,
          summonerName,
          password: hashedPassword,
          avatar: account
            ? convertToIconImageURL(account.profileIconId)
            : "/images/emblem/challenger.png",
        },
      });

      return createdUser;
    } catch (error) {
      // 존재하지 않는 소환사명을 작성한 경우
      if (error instanceof NotFoundException) {
        throw new NotFoundException({
          message: "존재하지 않는 소환사입니다.",
          type: "summonerName",
        });
      }
      throw error;
    }
  }

  /** 2023/07/07 - 유저 유효성 검사 ( id, password 일치 유저 탐색 ) - by 1-blue */
  async validateUser({ id, password }: ValidateUserDto) {
    const exUser = await this.prismaService.user.findUnique({ where: { id } });

    if (!exUser) {
      throw new ForbiddenException("존재하지 않는 유저입니다!");
    }
    if (!(await compare(password, exUser.password))) {
      throw new ForbiddenException("비밀번호가 틀렸습니다!");
    }

    const { password: pwd, ...user } = exUser;

    return user;
  }

  /** 2023/07/07 - 유저 찾기 - by 1-blue */
  async findOne(where: Prisma.UserWhereUniqueInput) {
    const exUser = await this.prismaService.user.findUnique({ where });

    if (!exUser) {
      throw new NotFoundException("일치하는 유저가 없습니다!");
    }

    const { password, ...user } = exUser;

    return user;
  }
}
