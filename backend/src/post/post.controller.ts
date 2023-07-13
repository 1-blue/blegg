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
import { FindOnePostDto } from "./dto/find-one-post.dto";
import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DeletePostDto } from "./dto/delete-post.dto";
import { RatingPostDto } from "./dto/rating.dto";
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
  async findOne(@Param() param: FindOnePostDto) {
    return await this.postService.findOne(param);
  }

  @Get()
  async findMany(@Query() query: FindManyPostDto) {
    return await this.postService.findMany(query);
  }

  @UseGuards(AuthGuard("jwt"))
  @Patch(":idx")
  async update(@Param() param: FindOnePostDto, @Body() body: UpdatePostDto) {
    return await this.postService.update({ ...param, ...body });
  }

  @UseGuards(AuthGuard("jwt"))
  @Delete(":idx")
  async delete(@Param() param: DeletePostDto) {
    return await this.postService.delete(param);
  }

  @UseGuards(AuthGuard("jwt"))
  @Post(":idx/rating")
  async createRating(
    @Param() param: RatingPostDto,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.createRating(param, user.idx);
  }
  @UseGuards(AuthGuard("jwt"))
  @Delete(":idx/rating")
  async deleteRating(
    @Param() param: RatingPostDto,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.deleteRating(param, user.idx);
  }
}
