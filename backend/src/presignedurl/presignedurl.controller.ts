import { Body, Controller, Post, HttpCode, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import {
  ApiTags,
  ApiOperation,
  ApiCookieAuth,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";

import { PresignedurlService } from "./presignedurl.service";

import { GetPresginedurlDto } from "./dto/get-presignedurl.dto";

@Controller("presignedurl")
@ApiTags("Presignedurl API ( AWS-S3 )")
export class PresignedurlController {
  private readonly presignedurlService: PresignedurlService;
  constructor(presignedurlService: PresignedurlService) {
    this.presignedurlService = presignedurlService;
  }

  @UseGuards(AuthGuard("jwt"))
  @Post()
  @HttpCode(201)
  @ApiCookieAuth("accessToken")
  @ApiOperation({
    summary: "이미지 업로드를 위한 검증된 URL 얻기",
    description: `이미지 업로드를 위한 검증된 URL 얻기 API<br />60초동안 유효한 PresignedURL을 얻습니다. ( POST로 요청 )`,
  })
  @ApiCreatedResponse({
    description: "검증된 URL 생성 성공",
    schema: {
      example: {
        url: "https://blegg.s3.ap-northeast-2.amazonaws.com/",
        fields: {
          bucket: "blegg",
          "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
          "X-Amz-Credential":
            "AKIARBZ7RTMVIZTCDROD/20230731/ap-northeast-2/s3/aws4_request",
          "X-Amz-Date": "20230731T080632Z",
          key: "development/images/avatar_1690790792979.png",
          Policy:
            "eyJleHBpcmF0aW9uIjoiMjAyMy0wNy0zMVQwODowNzozMloiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCw1MjQyODgwMF0sWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJpbWFnZS8iXSx7ImJ1Y2tldCI6ImJsZWdnIn0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In0seyJYLUFtei1DcmVkZW50aWFsIjoiQUtJQVJCWjdSVE1WSVpUQ0RST0QvMjAyMzA3MzEvYXAtbm9ydGhlYXN0LTIvczMvYXdzNF9yZXF1ZXN0In0seyJYLUFtei1EYXRlIjoiMjAyMzA3MzFUMDgwNjMyWiJ9LHsia2V5IjoiZGV2ZWxvcG1lbnQvaW1hZ2VzL2F2YXRhcl8xNjkwNzkwNzkyOTc5LnBuZyJ9XX0=",
          "X-Amz-Signature":
            "eb3152e7962cae8edf6c9ab84191dbd6c61c955a43821fb38fc9651442bbec20",
        },
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
  async getPresignedURL(@Body() body: GetPresginedurlDto) {
    return await this.presignedurlService.getPresignedURL(body);
  }
}
