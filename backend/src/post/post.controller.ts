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
}
