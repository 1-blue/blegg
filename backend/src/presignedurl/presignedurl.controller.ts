import { Body, Controller, Post } from "@nestjs/common";

import { PresignedurlService } from "./presignedurl.service";

import { GetPresginedurlDto } from "./dto/get-presignedurl.dto";

@Controller("presignedurl")
export class PresignedurlController {
  private readonly presignedurlService: PresignedurlService;
  constructor(presignedurlService: PresignedurlService) {
    this.presignedurlService = presignedurlService;
  }

  @Post()
  async getPresignedURL(@Body() body: GetPresginedurlDto) {
    return await this.presignedurlService.getPresignedURL(body);
  }
}
