import { Module } from "@nestjs/common";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AuthRepository } from "./auth.repository";
import { AccountService } from "src/riot/account/account.service";

@Module({
  controllers: [AuthController],
  providers: [AccountService, AuthService, AuthRepository],
})
export class AuthModule {}
