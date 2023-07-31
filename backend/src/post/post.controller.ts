import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiTags,
  ApiOperation,
  ApiCookieAuth,
  ApiParam,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";

import { PostService } from "./post.service";

import { CreatePostDto } from "./dto/create-post.dto";

import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { FindManyCommentDto } from "./dto/find-many-comment.dto";
import type { RequestWithUser } from "src/types/model";

@Controller("post")
@ApiTags("Post API")
export class PostController {
  private readonly postService: PostService;
  constructor(postService: PostService) {
    this.postService = postService;
  }

  /** 2023/07/11 - 게시글 생성 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post()
  @HttpCode(201)
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글 생성",
    description: `게시글 생성 API`,
  })
  @ApiCreatedResponse({
    description: "게시글 생성 성공",
    schema: {
      example: {
        idx: 31,
        title: "[Swagger] 테스트 게시글",
        content: "대충 테스트 게시글 내용 🐶",
        thumbnail: "https://blegg.s3.ap-northeast-2.amazonaws.com/avatar.png",
        viewCount: 0,
        createdAt: "2023-07-29T04:26:52.830Z",
        updatedAt: "2023-07-29T04:26:52.830Z",
        userIdx: 10,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  async create(@Body() body: CreatePostDto, @Req() { user }: RequestWithUser) {
    return await this.postService.create(body, user.idx);
  }

  /** 2023/07/11 - 단일 게시글 찾기 - by 1-blue */
  @Get(":postIdx")
  @ApiOperation({
    summary: "단일 게시글 찾기",
    description: `단일 게시글 찾기 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "검색할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "단일 게시글 찾기 성공",
    schema: {
      example: {
        idx: 1,
        title: "대충 제목1",
        content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕1",
        thumbnail: "/images/emblem/bronze.png",
        viewCount: 44,
        createdAt: "2023-07-19T12:55:28.165Z",
        updatedAt: "2023-07-19T12:56:28.171Z",
        userIdx: 3,
        user: {
          idx: 3,
          avatar: "/images/emblem/silver.png",
          nickname: "silver",
          summonerName: "silver",
        },
        ratingOfUsers: [
          {
            isLike: true,
            userIdx: 10,
          },
        ],
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findOne(@Param("postIdx") postIdx: number) {
    return await this.postService.findOne(postIdx);
  }

  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  @Get()
  @ApiOperation({
    summary: "특정 게시글들 찾기",
    description: `특정 게시글들 찾기 API`,
  })
  @ApiOkResponse({
    description: "특정 게시글들 찾기 성공",
    schema: {
      example: [
        {
          idx: 1,
          title: "대충 제목1",
          content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕1",
          thumbnail: "/images/emblem/bronze.png",
          viewCount: 44,
          createdAt: "2023-07-19T12:55:28.165Z",
          updatedAt: "2023-07-19T12:56:28.171Z",
          userIdx: 3,
          user: {
            idx: 3,
            avatar: "/images/emblem/silver.png",
            nickname: "silver",
            summonerName: "silver",
          },
          ratingOfUsers: [
            {
              isLike: true,
            },
          ],
        },
        {
          idx: 10,
          title: "대충 제목10",
          content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕10",
          thumbnail: "/images/emblem/silver.png",
          viewCount: 3,
          createdAt: "2023-07-19T12:46:28.166Z",
          updatedAt: "2023-07-19T12:56:28.171Z",
          userIdx: 8,
          user: {
            idx: 8,
            avatar:
              "https://blegg.s3.ap-northeast-2.amazonaws.com/development/images/big-ben_1689808549928.jpg",
            nickname: "수정",
            summonerName: "grandmaster",
          },
          ratingOfUsers: [
            {
              isLike: true,
            },
          ],
        },
      ],
    },
  })
  async findMany(@Query() query: FindManyPostDto) {
    return await this.postService.findMany(query);
  }

  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":postIdx")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글 수정",
    description: `게시글 수정 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "수정할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글 수정 성공",
    schema: {
      example: {
        idx: 1,
        title: "대충 제목1",
        content: "대충 게시글 수정 🐶",
        thumbnail: "/images/emblem/bronze.png",
        viewCount: 44,
        createdAt: "2023-07-19T12:55:28.165Z",
        updatedAt: "2023-07-31T03:53:50.619Z",
        userIdx: 3,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async update(@Param("postIdx") postIdx: number, @Body() body: UpdatePostDto) {
    return await this.postService.update(postIdx, body);
  }

  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":postIdx")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글 삭제",
    description: `게시글 삭제 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "삭제할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글 삭제 성공",
    schema: {
      example: {
        idx: 1,
        title: "대충 제목1",
        content: "대충 게시글 수정 🐶",
        thumbnail: "/images/emblem/bronze.png",
        viewCount: 44,
        createdAt: "2023-07-19T12:55:28.165Z",
        updatedAt: "2023-07-31T03:53:50.619Z",
        userIdx: 3,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async delete(@Param("postIdx") postIdx: number) {
    return await this.postService.delete(postIdx);
  }

  /** 2023/07/13 - 게시글 좋아요 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post(":postIdx/rating")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글 좋아요",
    description: `게시글 좋아요 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "좋아요할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글 좋아요 성공",
    schema: {
      example: {
        userIdx: 10,
        postIdx: 2,
        isLike: true,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async createRating(
    @Param("postIdx") postIdx: number,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.createRating(postIdx, user.idx);
  }

  /** 2023/07/13 - 게시글 싫어요 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Delete(":postIdx/rating")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글 싫어요",
    description: `게시글 싫어요 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "싫어요할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글 싫어요 성공",
    schema: {
      example: {
        userIdx: 10,
        postIdx: 2,
        isLike: false,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async deleteRating(
    @Param("postIdx") postIdx: number,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.deleteRating(postIdx, user.idx);
  }

  /** 2023/07/13 - 게시글 조회수 증가 - by 1-blue */
  @Post(":postIdx/view")
  @ApiOperation({
    summary: "게시글 조회수 증가",
    description: `게시글 조회수 증가 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "조회수를 증가할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글 조회수 증가 성공",
    schema: {
      example: {
        idx: 2,
        title: "대충 제목2",
        content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕2",
        thumbnail: "/images/emblem/gold.png",
        viewCount: 34,
        createdAt: "2023-07-19T12:54:28.165Z",
        updatedAt: "2023-07-19T12:56:28.171Z",
        userIdx: 3,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async addViewCount(@Param("postIdx") postIdx: number) {
    return await this.postService.addViewCount(postIdx);
  }

  /** 2023/07/16 - 댓글 추가 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post(":postIdx/comment")
  @HttpCode(201)
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글의 댓글 작성",
    description: `게시글의 댓글 작성 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "댓글을 작성할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiCreatedResponse({
    description: "게시글의 댓글 작성 성공",
    schema: {
      example: {
        idx: 1,
        content: "[Swagger] 테스트 댓글",
        createdAt: "2023-07-31T04:07:26.288Z",
        updatedAt: "2023-07-31T04:07:26.288Z",
        userIdx: 10,
        postIdx: 2,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async createComment(
    @Param("postIdx") postIdx: number,
    @Body() body: CreateCommentDto,
    @Req() { user }: RequestWithUser,
  ) {
    return await this.postService.createComment(postIdx, body, user.idx);
  }

  /** 2023/07/16 - 댓글들 조회 - by 1-blue */
  @Get(":postIdx/comment")
  @ApiOperation({
    summary: "게시글의 댓글들 조회",
    description: `게시글의 댓글들 조회 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "댓글들을 조회할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글의 댓글들 조회 성공",
    schema: {
      example: [
        {
          idx: 1,
          content: "[Swagger] 테스트 댓글",
          createdAt: "2023-07-31T04:07:26.288Z",
          updatedAt: "2023-07-31T04:07:55.890Z",
          userIdx: 10,
          postIdx: 2,
          user: {
            idx: 10,
            avatar:
              "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
            nickname: "나의 개발일지",
            summonerName: "나의 개발일지",
          },
        },
      ],
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 게시글",
    schema: {
      example: {
        message: "게시글이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findManyComment(
    @Param("postIdx") postIdx: number,
    @Query() query: FindManyCommentDto,
  ) {
    return await this.postService.findManyComment(postIdx, query);
  }

  /** 2023/07/16 - 댓글 수정 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Patch(":postIdx/comment/:commentIdx")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글의 댓글 수정",
    description: `게시글의 댓글 수정 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "댓글을 수정할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "commentIdx",
    description: "수정할 댓글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글의 댓글 수정 성공",
    schema: {
      example: {
        idx: 1,
        content: "[Swagger] 테스트 댓글 --- 수정",
        createdAt: "2023-07-31T04:07:26.288Z",
        updatedAt: "2023-07-31T04:18:14.053Z",
        userIdx: 10,
        postIdx: 2,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 ( 게시글 || 댓글 )",
    schema: {
      example: {
        message: "( 게시글 || 댓글 )이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
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
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글의 댓글 삭제",
    description: `게시글의 댓글 삭제 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "댓글을 삭제할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "commentIdx",
    description: "삭제할 댓글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글의 댓글 삭제 성공",
    schema: {
      example: {
        idx: 2,
        content: "[Swagger] 테스트 댓글",
        createdAt: "2023-07-31T04:18:45.129Z",
        updatedAt: "2023-07-31T04:18:45.129Z",
        userIdx: 10,
        postIdx: 2,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 ( 게시글 || 댓글 )",
    schema: {
      example: {
        message: "( 게시글 || 댓글 )이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async deleteComment(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
  ) {
    return await this.postService.deleteComment(postIdx, commentIdx);
  }

  /** 2023/07/18 - 답글 추가 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Post(":postIdx/comment/:commentIdx/reply")
  @HttpCode(201)
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글의 답글 작성",
    description: `게시글의 답글 작성 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "답글을 작성할 게시글 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "commentIdx",
    description: "답글을 작성할 댓글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiCreatedResponse({
    description: "게시글의 답글 작성 성공",
    schema: {
      example: {
        idx: 2,
        content: "[Swagger] 테스트 답글",
        createdAt: "2023-07-31T04:22:25.692Z",
        updatedAt: "2023-07-31T04:22:25.692Z",
        commentIdx: 1,
        postIdx: 2,
        userIdx: 10,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 ( 게시글 || 댓글 )",
    schema: {
      example: {
        message: "( 게시글 || 댓글 )이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
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
  @ApiOperation({
    summary: "게시글의 답글들 조회",
    description: `게시글의 답글들 조회 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "답글들을 조회할 게시글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "commentIdx",
    description: "답글들을 조회할 댓글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글의 답글들 조회 성공",
    schema: {
      example: [
        {
          idx: 2,
          content: "[Swagger] 테스트 답글",
          createdAt: "2023-07-31T04:22:25.692Z",
          updatedAt: "2023-07-31T04:22:25.692Z",
          commentIdx: 1,
          postIdx: 2,
          userIdx: 10,
          user: {
            idx: 10,
            avatar:
              "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
            nickname: "나의 개발일지",
            summonerName: "나의 개발일지",
          },
        },
      ],
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 ( 게시글 || 댓글 )",
    schema: {
      example: {
        message: "( 게시글 || 댓글 )이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
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
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글의 답글 수정",
    description: `게시글의 답글 수정 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "답글을 수정할 게시글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "commentIdx",
    description: "답글을 수정할 댓글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "replyIdx",
    description: "수정할 답글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글의 답글 수정 성공",
    schema: {
      example: {
        idx: 2,
        content: "[Swagger] 테스트 답글 --- 수정",
        createdAt: "2023-07-31T04:22:25.692Z",
        updatedAt: "2023-07-31T05:02:14.842Z",
        commentIdx: 1,
        postIdx: 2,
        userIdx: 10,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 ( 게시글 || 댓글 || 답글 )",
    schema: {
      example: {
        message: "( 게시글 || 댓글 || 답글 )이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
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
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "게시글의 답글 삭제",
    description: `게시글의 답글 삭제 API`,
  })
  @ApiParam({
    name: "postIdx",
    description: "답글을 삭제할 게시글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "commentIdx",
    description: "답글을 삭제할 댓글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiParam({
    name: "replyIdx",
    description: "삭제할 답글의 식별자",
    type: "number",
    example: "1",
    required: true,
  })
  @ApiOkResponse({
    description: "게시글의 답글 삭제 성공",
    schema: {
      example: {
        idx: 2,
        content: "[Swagger] 테스트 댓글 --- 수정",
        createdAt: "2023-07-31T04:22:25.692Z",
        updatedAt: "2023-07-31T05:02:14.842Z",
        commentIdx: 1,
        postIdx: 2,
        userIdx: 10,
      },
    },
  })
  @ApiUnauthorizedResponse({
    description: "인증 토큰을 담은 쿠키 없음 ( 로그인하지 않고 접근한 경우 )",
    schema: {
      example: {
        message: "Unauthorized",
        statusCode: 401,
      },
    },
  })
  @ApiNotFoundResponse({
    description: "존재하지 않는 ( 게시글 || 댓글 || 답글 )",
    schema: {
      example: {
        message: "( 게시글 || 댓글 || 답글 )이 존재하지 않습니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async deleteReply(
    @Param("postIdx") postIdx: number,
    @Param("commentIdx") commentIdx: number,
    @Param("replyIdx") replyIdx: number,
  ) {
    return await this.postService.deleteReply(postIdx, commentIdx, replyIdx);
  }
}
