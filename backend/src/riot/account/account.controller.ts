import { Controller, Get, Param } from "@nestjs/common";

import { AccountService } from "./account.service";

import type { RiotAccount } from "./models/account.model";

@Controller("riot/account")
export class AccountController {
  private readonly accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  @Get(":name")
  async findByName(@Param("name") name: string): Promise<RiotAccount> {
    return this.accountService.findByName(name);
  }
}
