import { Module } from "@nestjs/common";

import { MeController } from "./me.controller";
import { MeService } from "./me.service";
import { MeRepository } from "./me.repository";
import { AuthRepository } from "src/auth/auth.repository";
import { AccountService } from "src/riot/account/account.service";

@Module({
  controllers: [MeController],
  providers: [MeService, MeRepository, AuthRepository, AccountService],
})
export class MeModule {}
