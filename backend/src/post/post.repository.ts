import { Injectable, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";

import { convertS3URL } from "src/libs";

import { PrismaService } from "src/prisma/prisma.service";

import { CreatePostDto } from "./dto/create-post.dto";
import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { FindManyCommentDto } from "./dto/find-many-comment.dto";

@Injectable()
export class PostRepository {
  private readonly prismaService: PrismaService;
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  /** 2023/07/11 - 게시글 생성 - by 1-blue */
  async create({ title, content, thumbnail }: CreatePostDto, userIdx: number) {
    return await this.prismaService.post.create({
      data: {
        title,
        content,
        thumbnail: convertS3URL(
          thumbnail ? thumbnail : `/images/thumbnail.png`,
        ),
        userIdx,
      },
    });
  }
  /** 2023/07/11 - 단일 게시글 찾기 - by 1-blue */
  async findOne(postIdx: number) {
    const exPost = await this.prismaService.post.findUnique({
      where: { idx: postIdx },
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

    if (!exPost) throw new NotFoundException("게시글이 존재하지 않습니다.");

    return exPost;
  }
  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  async findMany({ start, count, sortBy, search }: FindManyPostDto) {
    // 검색 조건 ( title || content에 포함되었다면 )
    const where: Prisma.PostWhereInput = {
      ...(search && {
        OR: [
          { title: { contains: search } },
          { content: { contains: search } },
        ],
      }),
    };

    // 페이지네이션 조건 + 검색 조건
    const condition: Prisma.PostFindManyArgs = {
      ...(start !== -1 && { cursor: { idx: start } }),
      skip: start === -1 ? 0 : 1,
      take: count,
      where,
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
          },
        },
      },
    };

    // 최신순
    if (sortBy === "recent") {
      return await this.prismaService.post.findMany({
        orderBy: [{ createdAt: "desc" }],
        ...condition,
      });
    }
    // 조회순
    if (sortBy === "viewed") {
      return await this.prismaService.post.findMany({
        orderBy: [{ viewCount: "desc" }, { createdAt: "desc" }],
        ...condition,
      });
    }
    // 인기순
    if (sortBy === "popular") {
      return await this.prismaService.post.findMany({
        orderBy: [
          { ratingOfUsers: { _count: "desc" } },
          { viewCount: "desc" },
          { createdAt: "asc" },
        ],
        ...condition,
      });
    }
  }
  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  async update(postIdx: number, { thumbnail, ...body }: UpdatePostDto) {
    const exPost = await this.findOne(postIdx);

    return await this.prismaService.post.update({
      where: { idx: postIdx },
      data: {
        ...body,
        thumbnail: thumbnail ? convertS3URL(thumbnail) : exPost.thumbnail,
        updatedAt: new Date(),
      },
    });
  }
  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  async delete(postIdx: number) {
    await this.findOne(postIdx);

    return await this.prismaService.post.delete({ where: { idx: postIdx } });
  }

  /** 2023/07/13 - 좋아요 얻기 ( 좋아요 눌렀는지 여부 확인 ) - by 1-blue */
  async findLike(postIdx: number, userIdx: number) {
    return await this.prismaService.postRating.findFirst({
      where: { isLike: true, postIdx, userIdx },
    });
  }
  /** 2023/07/13 - 싫어요 얻기 ( 싫어요 눌렀는지 여부 확인 ) - by 1-blue */
  async findHate(postIdx: number, userIdx: number) {
    return await this.prismaService.postRating.findFirst({
      where: { isLike: false, postIdx, userIdx },
    });
  }
  /** 2023/07/13 - 좋아요 추가 - by 1-blue */
  async createLike(postIdx: number, userIdx: number) {
    return await this.prismaService.postRating.create({
      data: { isLike: true, postIdx, userIdx },
    });
  }
  /** 2023/07/13 - 좋아요 제거 - by 1-blue */
  async deleteLike(postIdx: number, userIdx: number) {
    return await this.prismaService.postRating.delete({
      where: { userIdx_postIdx: { postIdx, userIdx } },
    });
  }
  /** 2023/07/13 - 싫어요 추가 - by 1-blue */
  async createHate(postIdx: number, userIdx: number) {
    return await this.prismaService.postRating.create({
      data: { isLike: false, postIdx, userIdx },
    });
  }
  /** 2023/07/13 - 싫어요 제거 - by 1-blue */
  async deleteHate(postIdx: number, userIdx: number) {
    return await this.prismaService.postRating.delete({
      where: { userIdx_postIdx: { postIdx, userIdx } },
    });
  }

  /** 2023/07/13 - 게시글 좋아요 - by 1-blue */
  async createRating(postIdx: number, userIdx: number) {
    await this.findOne(postIdx);

    // 이미 좋아요 눌렀는지 확인
    const exLike = await this.findLike(postIdx, userIdx);

    // 좋아요 취소
    if (exLike) return await this.deleteLike(postIdx, userIdx);
    // 좋아요 추가
    else {
      // 이미 싫어요가 있다면 제거
      const exHate = await this.findHate(postIdx, userIdx);
      if (exHate) await this.deleteHate(postIdx, userIdx);

      return await this.createLike(postIdx, userIdx);
    }
  }
  /** 2023/07/13 - 게시글 싫어요 - by 1-blue */
  async deleteRating(postIdx: number, userIdx: number) {
    await this.findOne(postIdx);

    // 이미 싫어요 눌렀는지 확인
    const exHate = await this.findHate(postIdx, userIdx);

    // 싫어요 취소
    if (exHate) return await this.deleteHate(postIdx, userIdx);
    // 싫어요 추가
    else {
      // 이미 좋아요가 있다면 제거
      const exLike = await this.findLike(postIdx, userIdx);
      if (exLike) await this.deleteLike(postIdx, userIdx);

      return await this.createHate(postIdx, userIdx);
    }
  }

  /** 2023/07/13 - 게시글 조회수 증가 - by 1-blue */
  async addViewCount(postIdx: number) {
    const exPost = await this.findOne(postIdx);

    return await this.prismaService.post.update({
      where: { idx: postIdx },
      data: { viewCount: exPost.viewCount + 1 },
    });
  }

  /** 2023/07/16 - 댓글 추가 - by 1-blue */
  async createComment(
    postIdx: number,
    { content }: CreateCommentDto,
    userIdx: number,
  ) {
    await this.findOne(postIdx);

    return await this.prismaService.comment.create({
      data: { userIdx, postIdx, content },
    });
  }
  /** 2023/07/18 - 특정 댓글 조회 - by 1-blue */
  async findOneComment(commentIdx: number) {
    const exComment = await this.prismaService.comment.findUnique({
      where: { idx: commentIdx },
    });

    if (!exComment) throw new NotFoundException("댓글이 존재하지 않습니다.");

    return exComment;
  }
  /** 2023/07/16 - 댓글들 조회 - by 1-blue */
  async findManyComment(postIdx: number, { start, count }: FindManyCommentDto) {
    await this.findOne(postIdx);

    // 페이지네이션 조건
    const condition: Prisma.CommentFindManyArgs = {
      ...(start !== -1 && { cursor: { idx: start } }),
      skip: start === -1 ? 0 : 1,
      take: count,
      where: { postIdx },
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
    };

    return await this.prismaService.comment.findMany({
      orderBy: [{ createdAt: "asc" }],
      ...condition,
    });
  }
  /** 2023/07/16 - 댓글 수정 - by 1-blue */
  async updateComment(
    postIdx: number,
    commentIdx: number,
    { content }: UpdateCommentDto,
  ) {
    await Promise.all([this.findOne(postIdx), this.findOneComment(commentIdx)]);

    return await this.prismaService.comment.update({
      where: { idx: commentIdx },
      data: { content, updatedAt: new Date() },
    });
  }
  /** 2023/07/16 - 댓글 삭제 - by 1-blue */
  async deleteComment(postIdx: number, commentIdx: number) {
    await Promise.all([this.findOne(postIdx), this.findOneComment(commentIdx)]);

    return await this.prismaService.comment.delete({
      where: { idx: commentIdx },
    });
  }

  /** 2023/07/18 - 답글 추가 - by 1-blue */
  async createReply(
    postIdx: number,
    commentIdx: number,
    { content }: CreateCommentDto,
    userIdx: number,
  ) {
    await Promise.all([this.findOne(postIdx), this.findOneComment(commentIdx)]);

    return await this.prismaService.reply.create({
      data: { userIdx, postIdx, commentIdx, content },
    });
  }
  /** 2023/07/18 - 답글 조회 - by 1-blue */
  async findOneReply(replyIdx: number) {
    const exReply = await this.prismaService.reply.findUnique({
      where: { idx: replyIdx },
    });

    if (!exReply) throw new NotFoundException("답글이 존재하지 않습니다.");

    return exReply;
  }
  /** 2023/07/18 - 답글들 조회 - by 1-blue */
  async findManyReply(
    postIdx: number,
    commentIdx: number,
    { start, count }: FindManyCommentDto,
  ) {
    await Promise.all([this.findOne(postIdx), this.findOneComment(commentIdx)]);

    // 페이지네이션 조건
    const condition: Prisma.ReplyFindManyArgs = {
      ...(start !== -1 && { cursor: { idx: start } }),
      skip: start === -1 ? 0 : 1,
      take: count,
      where: { AND: { postIdx, commentIdx } },
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
    };

    return await this.prismaService.reply.findMany({
      orderBy: [{ createdAt: "asc" }],
      ...condition,
    });
  }
  /** 2023/07/18 - 답글 수정 - by 1-blue */
  async updateReply(
    postIdx: number,
    commentIdx: number,
    replyIdx: number,
    { content }: UpdateCommentDto,
  ) {
    await Promise.all([
      this.findOne(postIdx),
      this.findOneComment(commentIdx),
      this.findOneReply(replyIdx),
    ]);

    return await this.prismaService.reply.update({
      where: { idx: replyIdx },
      data: { content, updatedAt: new Date() },
    });
  }
  /** 2023/07/18 - 답글 삭제 - by 1-blue */
  async deleteReply(postIdx: number, commentIdx: number, replyIdx: number) {
    await Promise.all([
      this.findOne(postIdx),
      this.findOneComment(commentIdx),
      this.findOneReply(replyIdx),
    ]);

    return await this.prismaService.reply.delete({
      where: { idx: replyIdx },
    });
  }
}
