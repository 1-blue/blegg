import { Injectable } from "@nestjs/common";

import { FindManyDto } from "./dto/find-many.dto";
import { MeRepository } from "./me.repository";

@Injectable()
export class MeService {
  private readonly meRepository: MeRepository;
  constructor(meRepository: MeRepository) {
    this.meRepository = meRepository;
  }

  /** 2023/07/18 - 내가 작성한 게시글들 찾기 - by 1-blue */
  async findManyPost(userIdx: number, body: FindManyDto) {
    return await this.meRepository.findManyPost(userIdx, body);
  }
  /** 2023/07/18 - 내가 좋아요한 게시글들 찾기 - by 1-blue */
  async findManyLikedPost(userIdx: number, body: FindManyDto) {
    return await this.meRepository.findManyLikedPost(userIdx, body);
  }
  /** 2023/07/18 - 내가 싫어요한 게시글들 찾기 - by 1-blue */
  async findManyHatedPost(userIdx: number, body: FindManyDto) {
    return await this.meRepository.findManyHatedPost(userIdx, body);
  }
}
