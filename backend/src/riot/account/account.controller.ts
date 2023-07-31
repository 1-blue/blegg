import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiParam, ApiResponse } from "@nestjs/swagger";

import { AccountService } from "./account.service";

import type { RiotAccount } from "./models/account.model";

@Controller("riot/account")
@ApiTags("Riot API")
export class AccountController {
  private readonly accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  /** 2023/06/28 - 소환사 이름으로 계정 정보 얻기 - by 1-blue */
  @Get(":name")
  @ApiOperation({
    summary: "소환사 이름으로 계정 정보 얻기",
    description: `리그오브레전드 계정에서 사용하는 닉네임으로 소환사 정보를 얻는 API ( [참고 라이엇 API](https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName) )`,
  })
  @ApiParam({
    name: "name",
    description: "검색할 소환사 이름",
    type: "string",
    example: "Akaps",
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 소환사에 대한 정보 반환",
    schema: {
      example: {
        id: "6swFsK63ulrLOzgp_j6I2xjlcsTUbVrCreAiwfRgVuUJCg",
        accountId: "1Vr8iRNAhQzQV3NS5koHNkutSKNj2gxLmb8PU2F6ANA",
        puuid:
          "j997jjLr8QdoXzAMhJX7iLH7-8SqgxeBL6OMmWdgAdmWYqLQYezFnwvDumHYYhVM-HpTSAlSzkDkWA",
        name: "Akaps",
        profileIconId: 3791,
        revisionDate: 1690475052000,
        summonerLevel: 436,
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: "존재하지 않는 소환사",
    schema: {
      example: {
        message: "존재하지 않는 소환사입니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findByName(@Param("name") name: string): Promise<RiotAccount> {
    return this.accountService.findByName(name);
  }
}
