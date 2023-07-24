import { Controller, Get, Param } from "@nestjs/common";

import { AccountService } from "./account.service";

import type { RiotAccount } from "./models/account.model";

@Controller("riot/account")
export class AccountController {
  private readonly accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  /** 2023/06/28 - 소환사 이름으로 계정 정보 얻기 - by 1-blue */
  @Get(":name")
  async findByName(@Param("name") name: string): Promise<RiotAccount> {
    return this.accountService.findByName(name);
  }

  /** 2023/07/24 - 소환사 아이디로 계정 정보 얻기 - by 1-blue */
  @Get(":name")
  async findBySummonerId(
    @Param("summonerId") summonerId: string,
  ): Promise<RiotAccount> {
    return this.accountService.findBySummonerId(summonerId);
  }
}
