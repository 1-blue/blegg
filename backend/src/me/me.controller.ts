import {
  Controller,
  Get,
  Patch,
  Query,
  Body,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiTags,
  ApiOperation,
  ApiCookieAuth,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiNotFoundResponse,
  ApiConflictResponse,
} from "@nestjs/swagger";

import { MeService } from "./me.service";

import { FindManyDto } from "./dto/find-many.dto";
import { UpdateMeDto } from "./dto/update-me.dto";
import type { RequestWithUser } from "src/types/model";

@Controller("me")
@ApiTags("Me API")
export class MeController {
  private readonly meService: MeService;
  constructor(meService: MeService) {
    this.meService = meService;
  }

  /** 2023/07/07 - 로그인한 유저 정보 얻기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "로그인한 유저 정보 얻기",
    description: `로그인한 유저 정보 얻기 API`,
  })
  @ApiOkResponse({
    description: "로그인한 유저 정보 얻기 성공",
    schema: {
      example: {
        idx: 10,
        id: "1blue",
        nickname: "나의 개발일지",
        summonerName: "나의 개발일지",
        avatar:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
        provider: "local",
        snsId: null,
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
  async findMe(@Request() req: RequestWithUser) {
    return req.user;
  }

  /** 2023/07/19 - 내 정보 수정 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Patch("")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "로그인한 유저 정보 수정",
    description: `로그인한 유저 정보 수정 API`,
  })
  @ApiOkResponse({
    description: "로그인한 유저 정보 수정 얻기 성공",
    schema: {
      example: {
        idx: 10,
        id: "1blue",
        nickname: "나의 개발일지",
        summonerName: "나의 개발일지",
        avatar:
          "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
        provider: "local",
        snsId: null,
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
    description: "존재하지 않는 소환사 이름",
    schema: {
      example: {
        message: "존재하지 않는 소환사입니다.",
        type: "summonerName",
      },
    },
  })
  @ApiConflictResponse({
    description: "중복되는 ( 아이디 || 별칭 || 소환사 이름 )",
    schema: {
      example: {
        message: "이미 사용중인 ( 아이디 || 닉네임 || 소환사명 )입니다!",
        type: "nickname ( id || nickname || summonerName )",
      },
    },
  })
  async updateMe(
    @Request() { user }: RequestWithUser,
    @Body() body: UpdateMeDto,
  ) {
    return await this.meService.updateMe(user, body);
  }

  /** 2023/07/18 - 내가 작성한 게시글들 찾기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("post")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "로그인한 유저가 작성한 게시글들 얻기",
    description: `로그인한 유저가 작성한 게시글들 얻기 API`,
  })
  @ApiOkResponse({
    description: "로그인한 유저가 작성한 게시글들 얻기 성공",
    schema: {
      example: [
        {
          idx: 33,
          title: "[Swagger] 테스트 게시글",
          content: "대충 테스트 게시글 내용 🐶",
          thumbnail: "https://blegg.s3.ap-northeast-2.amazonaws.com/avatar.png",
          viewCount: 0,
          createdAt: "2023-07-29T04:29:14.830Z",
          updatedAt: "2023-07-29T04:29:14.830Z",
          userIdx: 10,
          user: {
            idx: 10,
            avatar:
              "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
            nickname: "나의 개발일지",
            summonerName: "나의 개발일지",
          },
          ratingOfUsers: [],
        },
        {
          idx: 32,
          title: "[Swagger] 테스트 게시글",
          content: "대충 테스트 게시글 내용 🐶",
          thumbnail: "https://blegg.s3.ap-northeast-2.amazonaws.com/avatar.png",
          viewCount: 0,
          createdAt: "2023-07-29T04:28:27.708Z",
          updatedAt: "2023-07-29T04:28:27.708Z",
          userIdx: 10,
          user: {
            idx: 10,
            avatar:
              "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
            nickname: "나의 개발일지",
            summonerName: "나의 개발일지",
          },
          ratingOfUsers: [],
        },
      ],
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
  async findManyPost(
    @Request() { user }: RequestWithUser,
    @Query() query: FindManyDto,
  ) {
    return await this.meService.findManyPost(user.idx, query);
  }

  /** 2023/07/18 - 내가 좋아요한 게시글들 찾기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("post/liked")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "로그인한 유저가 좋아요한 게시글들 얻기",
    description: `로그인한 유저가 좋아요한 게시글들 얻기 API`,
  })
  @ApiOkResponse({
    description: "로그인한 유저가 좋아요한 게시글들 얻기 성공",
    schema: {
      example: [
        {
          userIdx: 10,
          postIdx: 33,
          isLike: true,
          post: {
            idx: 33,
            title: "[Swagger] 테스트 게시글",
            content: "대충 테스트 게시글 내용 🐶",
            thumbnail:
              "https://blegg.s3.ap-northeast-2.amazonaws.com/avatar.png",
            viewCount: 1,
            createdAt: "2023-07-29T04:29:14.830Z",
            updatedAt: "2023-07-29T04:29:14.830Z",
            userIdx: 10,
            user: {
              idx: 10,
              avatar:
                "http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png",
              nickname: "나의 개발일지",
              summonerName: "나의 개발일지",
            },
            ratingOfUsers: [
              {
                isLike: true,
                userIdx: 10,
              },
            ],
          },
        },
        {
          userIdx: 10,
          postIdx: 2,
          isLike: true,
          post: {
            idx: 2,
            title: "대충 제목2",
            content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕2",
            thumbnail: "/images/emblem/gold.png",
            viewCount: 38,
            createdAt: "2023-07-19T12:54:28.165Z",
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
      ],
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
  async findManyLikedPost(
    @Request() { user }: RequestWithUser,
    @Query() query: FindManyDto,
  ) {
    return await this.meService.findManyLikedPost(user.idx, query);
  }

  /** 2023/07/18 - 내가 싫어요한 게시글들 찾기 - by 1-blue */
  @UseGuards(AuthGuard("jwt"))
  @Get("post/hated")
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "로그인한 유저가 싫어요한 게시글들 얻기",
    description: `로그인한 유저가 싫어요한 게시글들 얻기 API`,
  })
  @ApiOkResponse({
    description: "로그인한 유저가 싫어요한 게시글들 얻기 성공",
    schema: {
      example: [
        {
          userIdx: 10,
          postIdx: 5,
          isLike: false,
          post: {
            idx: 5,
            title: "대충 제목5",
            content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕5",
            thumbnail: "/images/emblem/silver.png",
            viewCount: 56,
            createdAt: "2023-07-19T12:51:28.165Z",
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
                isLike: false,
                userIdx: 10,
              },
            ],
          },
        },
        {
          userIdx: 10,
          postIdx: 6,
          isLike: false,
          post: {
            idx: 6,
            title: "대충 제목6",
            content: "🐶🐕🫥\n🍕👏\n대충 내용\n☔🎥\n📮🏅🕕6",
            thumbnail: "/images/emblem/grandmaster.png",
            viewCount: 84,
            createdAt: "2023-07-19T12:50:28.165Z",
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
                isLike: false,
                userIdx: 10,
              },
            ],
          },
        },
      ],
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
  async findManyHatedPost(
    @Request() { user }: RequestWithUser,
    @Query() query: FindManyDto,
  ) {
    return await this.meService.findManyHatedPost(user.idx, query);
  }
}
