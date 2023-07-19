import { Injectable, NotFoundException } from "@nestjs/common";

import { S3_BASE_URL } from "src/libs";

import { PrismaService } from "src/prisma/prisma.service";
import { AuthRepository } from "src/auth/auth.repository";
import { AccountService } from "src/riot/account/account.service";

import { FindManyDto } from "./dto/find-many.dto";
import { UpdateMeDto } from "./dto/update-me.dto";
import type { RequestWithUser } from "src/types/model";

@Injectable()
export class MeRepository {
  private readonly prismaService: PrismaService;
  private readonly authRepository: AuthRepository;
  private readonly accountService: AccountService;
  constructor(
    prismaService: PrismaService,
    authRepository: AuthRepository,
    accountService: AccountService,
  ) {
    this.prismaService = prismaService;
    this.authRepository = authRepository;
    this.accountService = accountService;
  }

  /** 2023/07/18 - 내가 작성한 게시글들 찾기 - by 1-blue */
  async findManyPost(userIdx: number, { start, count }: FindManyDto) {
    return await this.prismaService.post.findMany({
      orderBy: [{ createdAt: "desc" }],
      ...(start !== -1 && { cursor: { idx: start } }),
      skip: start === -1 ? 0 : 1,
      take: count,
      where: { userIdx },
      include: {
        user: {
          select: {
            idx: true,
            avatar: true,
            nickname: true,
            summonerName: true,
          },
        },
        ratingOfUsers: {
          select: {
            isLike: true,
            userIdx: true,
          },
        },
      },
    });
  }
  /** 2023/07/18 - 내가 좋아요한 게시글들 찾기 - by 1-blue */
  async findManyLikedPost(userIdx: number, { start, count }: FindManyDto) {
    return await this.prismaService.postRating.findMany({
      orderBy: [{ post: { createdAt: "desc" } }],
      ...(start !== -1 && {
        cursor: { userIdx_postIdx: { userIdx, postIdx: start } },
      }),
      skip: start === -1 ? 0 : 1,
      take: count,
      where: { userIdx, isLike: true },
      include: {
        post: {
          include: {
            user: {
              select: {
                idx: true,
                avatar: true,
                nickname: true,
                summonerName: true,
              },
            },
            ratingOfUsers: {
              select: {
                isLike: true,
                userIdx: true,
              },
            },
          },
        },
      },
    });
  }
  /** 2023/07/18 - 내가 싫어요한 게시글들 찾기 - by 1-blue */
  async findManyHatedPost(userIdx: number, { start, count }: FindManyDto) {
    return await this.prismaService.postRating.findMany({
      orderBy: [{ post: { createdAt: "desc" } }],
      ...(start !== -1 && {
        cursor: { userIdx_postIdx: { userIdx, postIdx: start } },
      }),
      skip: start === -1 ? 0 : 1,
      take: count,
      where: { userIdx, isLike: false },
      include: {
        post: {
          include: {
            user: {
              select: {
                idx: true,
                avatar: true,
                nickname: true,
                summonerName: true,
              },
            },
            ratingOfUsers: {
              select: {
                isLike: true,
                userIdx: true,
              },
            },
          },
        },
      },
    });
  }

  /** 2023/07/19 - 내 정보 수정 - by 1-blue */
  async updateMe(
    user: RequestWithUser["user"],
    { avatar, ...body }: UpdateMeDto,
  ) {
    // 닉네임 중복 검사
    if (user.nickname !== body.nickname) {
      await this.authRepository.isDuplicateNickname(body.nickname);
    }
    // 소환사 이름 검사
    if (user.summonerName !== body.summonerName) {
      // 존재하는 소환사 이름인지 검사
      try {
        await this.accountService.findByName(body.summonerName);
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

      // 소환사 이름 중복 검사
      await this.authRepository.isDuplicateSummonerName(body.summonerName);
    }

    return await this.prismaService.user.update({
      where: { idx: user.idx },
      data: {
        ...body,
        ...(avatar !== user.avatar && { avatar: `${S3_BASE_URL}/${avatar}` }),
      },
    });
  }
}
