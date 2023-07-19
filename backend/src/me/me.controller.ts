import { Controller, Get, Query, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { MeService } from "./me.service";

import { FindManyDto } from "./dto/find-many.dto";
import type { RequestWithUser } from "src/types/model";

@Controller("me")
export class MeController {
  private readonly meService: MeService;
  constructor(meService: MeService) {
    this.meService = meService;
  }

  /** 2023/07/07 - 로그인한 유저 정보 얻기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("")
  async findMe(@Request() req: RequestWithUser) {
    return req.user;
  }

  /** 2023/07/18 - 내가 작성한 게시글들 찾기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("post")
  async findManyPost(
    @Request() { user }: RequestWithUser,
    @Query() query: FindManyDto,
  ) {
    return await this.meService.findManyPost(user.idx, query);
  }
  /** 2023/07/18 - 내가 좋아요한 게시글들 찾기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("post/liked")
  async findManyLikedPost(
    @Request() { user }: RequestWithUser,
    @Query() query: FindManyDto,
  ) {
    return await this.meService.findManyLikedPost(user.idx, query);
  }
  /** 2023/07/18 - 내가 싫어요한 게시글들 찾기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("post/hated")
  async findManyHatedPost(
    @Request() { user }: RequestWithUser,
    @Query() query: FindManyDto,
  ) {
    return await this.meService.findManyHatedPost(user.idx, query);
  }
}
