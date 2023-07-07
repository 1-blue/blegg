import { Injectable, ConflictException } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthRepository {
  private readonly prismaService: PrismaService;
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
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
