import { Module } from "@nestjs/common";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { AccountService } from "src/riot/account/account.service";

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, AccountService],
})
export class UserModule {}
