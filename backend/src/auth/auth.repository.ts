import { Injectable, ConflictException } from "@nestjs/common";
import { hash } from "bcrypt";

import { convertToIconImageURL } from "src/libs";

import { PrismaService } from "src/prisma/prisma.service";
import { AccountService } from "src/riot/account/account.service";

import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthRepository {
  private readonly prismaService: PrismaService;
  private readonly accountService: AccountService;
  constructor(prismaService: PrismaService, accountService: AccountService) {
    this.prismaService = prismaService;
    this.accountService = accountService;
  }

  /** 2023/07/06 - 회원가입 - by 1-blue */
  async createUser({ id, nickname, password, summonerName }: SignInDto) {
    try {
      const [hashedPassword, account] = await Promise.all([
        hash(password, 10),
        this.accountService.findByName(summonerName),
      ]);

      const createdUser = await this.prismaService.user.create({
        data: {
          id,
          nickname,
          summonerName,
          password: hashedPassword,
          avatar: convertToIconImageURL(account.profileIconId),
        },
      });

      return createdUser;
    } catch (error) {
      throw error;
    }
  }
  /** 2023/07/06 - 아이디 중복 확인 - by 1-blue */
  async isDuplicateId(id: string) {
    const exUser = await this.prismaService.user.findUnique({
      where: { id },
    });

    if (exUser) {
      throw new ConflictException({
        message: "이미 사용중인 아이디입니다!",
        type: "id",
      });
    }
  }
  /** 2023/07/06 - 닉네임 중복 확인 - by 1-blue */
  async isDuplicateNickname(nickname: string) {
    const exUser = await this.prismaService.user.findUnique({
      where: { nickname },
    });

    if (exUser) {
      throw new ConflictException({
        message: "이미 사용중인 닉네임입니다!",
        type: "nickname",
      });
    }
  }
  /** 2023/07/06 - 소환사 이름 중복 확인 - by 1-blue */
  async isDuplicateSummonerName(summonerName: string) {
    const exUser = await this.prismaService.user.findUnique({
      where: { summonerName },
    });

    if (exUser) {
      throw new ConflictException({
        message: "이미 사용중인 소환사 이름입니다!",
        type: "summonerName",
      });
    }
  }
}
