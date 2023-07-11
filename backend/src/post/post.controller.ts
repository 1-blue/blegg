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
import { FindOnePost } from "./dto/find-one-post.dto";
import { FindManyPost } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DeletePost } from "./dto/delete-post.dto";
import type { RequestWithUser } from "src/types/model";

@Controller("post")
export class PostController {
  private readonly postService: PostService;
  constructor(postService: PostService) {
    this.postService = postService;
  }

  @UseGuards(AuthGuard("jwt"))
  @Post()
  async create(@Body() body: CreatePostDto, @Req() { user }: RequestWithUser) {
    return await this.postService.create(body, user.idx);
  }

  @Get(":idx")
  async findOne(@Param() param: FindOnePost) {
    return await this.postService.findOne(param);
  }

  @Get()
  async findMany(@Query() query: FindManyPost) {
    return await this.postService.findMany(query);
  }

  @UseGuards(AuthGuard("jwt"))
  @Patch(":idx")
  async update(@Param() param: FindOnePost, @Body() body: UpdatePostDto) {
    return await this.postService.update({ ...param, ...body });
  }

  @UseGuards(AuthGuard("jwt"))
  @Delete(":idx")
  async delete(@Param() param: DeletePost) {
    return await this.postService.delete(param);
  }
}
