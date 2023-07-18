import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { PostService } from "./post.service";

import { CreatePostDto } from "./dto/create-post.dto";

import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { FindManyCommentDto } from "./dto/find-many-comment.dto";
import type { RequestWithUser } from "src/types/model";

@Controller("post")
export class PostController {
  private readonly postService: PostService;
  constructor(postService: PostService) {
    this.postService = postService;
  }

  /** 2023/07/11 - 게시글 생성 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Body() body: CreatePostDto, @Req() { user }: RequestWithUser) {
    return await this.postService.create(body, user.idx);
  }
  /** 2023/07/11 - 단일 게시글 찾기 - by 1-blue */
  @Get(":postIdx")
  async findOne(@Param("postIdx") postIdx: number) {
    return await this.postService.findOne(postIdx);
  }
  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  @Get()
  async findMany(@Query() query: FindManyPostDto) {
    return await this.postService.findMany(query);
  }
  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":postIdx")
  async update(@Param("postIdx") postIdx: number, @Body() body: UpdatePostDto) {
    return await this.postService.update(postIdx, body);
  }
  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":postIdx")
  async delete(@Param("postIdx") postIdx: number) {
    return await this.postService.delete(postIdx);
  }

  /** 2023/07/13 - 게시글 좋아요 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post(":postIdx/rating")
  async createRating(
    @Param("postIdx") postIdx: number,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.createRating(postIdx, user.idx);
  }
  /** 2023/07/13 - 게시글 싫어요 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":postIdx/rating")
  async deleteRating(
    @Param("postIdx") postIdx: number,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.deleteRating(postIdx, user.idx);
  }

  /** 2023/07/13 - 게시글 조회수 증가 - by 1-blue */
  @Post(":postIdx/view")
  async addViewCount(@Param("postIdx") postIdx: number) {
    return await this.postService.addViewCount(postIdx);
  }

  /** 2023/07/16 - 댓글 추가 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post(":postIdx/comment")
  async createComment(
    @Param("postIdx") postIdx: number,
    @Body() body: CreateCommentDto,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.createComment(postIdx, body, user.idx);
  }
  /** 2023/07/16 - 댓글들 조회 - by 1-blue */
  @Get(":postIdx/comment")
  async findManyComment(
    @Param("postIdx") postIdx: number,
    @Query() query: FindManyCommentDto,
  ) {
    return await this.postService.findManyComment(postIdx, query);
  }
  /** 2023/07/16 - 댓글 수정 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":postIdx/comment/:commentIdx")
  async updateComment(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
    @Body() body: UpdateCommentDto,
  ) {
    return await this.postService.updateComment(postIdx, commentIdx, body);
  }
  /** 2023/07/16 - 댓글 삭제 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":postIdx/comment/:commentIdx")
  async deleteComment(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
  ) {
    return await this.postService.deleteComment(postIdx, commentIdx);
  }

  /** 2023/07/18 - 답글 추가 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post(":postIdx/comment/:commentIdx/reply")
  async createReply(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
    @Body() body: CreateCommentDto,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.createReply(
      postIdx,
      commentIdx,
      body,
      user.idx,
    );
  }
  /** 2023/07/18 - 답글들 조회 - by 1-blue */
  @Get(":postIdx/comment/:commentIdx/reply")
  async findManyReply(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
    @Query() query: FindManyCommentDto,
  ) {
    return await this.postService.findManyReply(postIdx, commentIdx, query);
  }
  /** 2023/07/18 - 답글 수정 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":postIdx/comment/:commentIdx/reply/:replyIdx")
  async updateReply(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
    @Param("replyIdx") replyIdx: number,
    @Body() body: UpdateCommentDto,
  ) {
    return await this.postService.updateReply(
      postIdx,
      commentIdx,
      replyIdx,
      body,
    );
  }
  /** 2023/07/18 - 답글 삭제 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":postIdx/comment/:commentIdx/reply/:replyIdx")
  async deleteReply(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
    @Param("replyIdx") replyIdx: number,
  ) {
    return await this.postService.deleteReply(postIdx, commentIdx, replyIdx);
  }
}
