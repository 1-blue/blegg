import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

import { FindManyDto } from "./dto/find-many.dto";

@Injectable()
export class MeRepository {
  private readonly prismaService: PrismaService;
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
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
}
