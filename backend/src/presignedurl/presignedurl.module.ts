import { Module } from "@nestjs/common";

import { PresignedurlController } from "./presignedurl.controller";
import { PresignedurlService } from "./presignedurl.service";

@Module({
  controllers: [PresignedurlController],
  providers: [PresignedurlService],
})
export class PresignedurlModule {}
