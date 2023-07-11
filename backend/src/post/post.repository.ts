import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "src/prisma/prisma.service";

import { CreatePostDto } from "./dto/create-post.dto";
import { FindOnePost } from "./dto/find-one-post.dto";
import { FindManyPost } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DeletePost } from "./dto/delete-post.dto";

@Injectable()
export class PostRepository {
  private readonly prismaService: PrismaService;
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  /** 2023/07/11 - 게시글 생성 - by 1-blue */
  async create({ title, content, thumbnail }: CreatePostDto, userIdx: number) {
    // TODO: 기본 썸네일
    return await this.prismaService.post.create({
      data: {
        title,
        content,
        thumbnail: thumbnail || "/images/emblem/challenger.png",
        userIdx,
      },
    });
  }

  /** 2023/07/11 - 단일 게시글 찾기 - by 1-blue */
  async findOne({ idx }: FindOnePost) {
    const exPost = await this.prismaService.post.findUnique({ where: { idx } });

    if (!exPost) throw new NotFoundException("게시글이 존재하지 않습니다.");

    return exPost;
  }

  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  async findMany({ start, count }: FindManyPost) {
    return await this.prismaService.post.findMany({
      orderBy: { createdAt: "desc" },
      cursor: { idx: start },
      skip: 1,
      take: count,
      include: {
        user: {
          select: {
            idx: true,
            avatar: true,
            nickname: true,
            summonerName: true,
          },
        },
      },
    });
  }

  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  async update({ idx, ...body }: FindOnePost & UpdatePostDto) {
    await this.findOne({ idx });

    return await this.prismaService.post.update({
      where: { idx },
      data: { ...body },
    });
  }

  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  async delete({ idx }: DeletePost) {
    await this.findOne({ idx });

    return await this.prismaService.post.delete({ where: { idx } });
  }
}
