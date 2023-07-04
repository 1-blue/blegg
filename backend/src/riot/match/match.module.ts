import { Module } from "@nestjs/common";

import { MatchController } from "./match.controller";

import { AccountService } from "../account/account.service";
import { MatchService } from "./match.service";

@Module({
  controllers: [MatchController],
  providers: [AccountService, MatchService],
})
export class MatchModule {}
