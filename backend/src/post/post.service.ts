import { Injectable } from "@nestjs/common";

import { PostRepository } from "./post.repository";

import { CreatePostDto } from "./dto/create-post.dto";
import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";

@Injectable()
export class PostService {
  private readonly postRepository: PostRepository;
  constructor(postRepository: PostRepository) {
    this.postRepository = postRepository;
  }

  /** 2023/07/11 - 게시글 생성 - by 1-blue */
  async create(body: CreatePostDto, userIdx: number) {
    return await this.postRepository.create(body, userIdx);
  }

  /** 2023/07/11 - 단일 게시글 찾기 - by 1-blue */
  async findOne(postIdx: number) {
    return await this.postRepository.findOne(postIdx);
  }

  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  async findMany(body: FindManyPostDto) {
    return await this.postRepository.findMany(body);
  }

  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  async update(postIdx: number, body: UpdatePostDto) {
    return await this.postRepository.update(postIdx, body);
  }

  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  async delete(postIdx: number) {
    return await this.postRepository.delete(postIdx);
  }

  /** 2023/07/13 - 게시글 좋아요 - by 1-blue */
  async createRating(postIdx: number, userIdx: number) {
    return await this.postRepository.createRating(postIdx, userIdx);
  }

  /** 2023/07/13 - 게시글 싫어요 - by 1-blue */
  async deleteRating(postIdx: number, userIdx: number) {
    return await this.postRepository.deleteRating(postIdx, userIdx);
  }

  /** 2023/07/13 - 게시글 조회수 증가 - by 1-blue */
  async addViewCount(postIdx: number) {
    return await this.postRepository.addViewCount(postIdx);
  }
}
