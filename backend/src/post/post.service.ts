import { Injectable } from "@nestjs/common";

import { PostRepository } from "./post.repository";

import { CreatePostDto } from "./dto/create-post.dto";
import { FindOnePostDto } from "./dto/find-one-post.dto";
import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DeletePostDto } from "./dto/delete-post.dto";
import { RatingPostDto } from "./dto/rating.dto";
import { AddViewCountPostDto } from "./dto/add-view-count-post.dto";

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
  async findOne(body: FindOnePostDto) {
    return await this.postRepository.findOne(body);
  }

  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  async findMany(body: FindManyPostDto) {
    return await this.postRepository.findMany(body);
  }

  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  async update(body: FindOnePostDto & UpdatePostDto) {
    return await this.postRepository.update(body);
  }

  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  async delete(body: DeletePostDto) {
    return await this.postRepository.delete(body);
  }

  /** 2023/07/13 - 게시글 좋아요 - by 1-blue */
  async createRating(body: RatingPostDto, userIdx: number) {
    return await this.postRepository.createRating(body, userIdx);
  }

  /** 2023/07/13 - 게시글 싫어요 - by 1-blue */
  async deleteRating(body: RatingPostDto, userIdx: number) {
    return await this.postRepository.deleteRating(body, userIdx);
  }

  /** 2023/07/13 - 게시글 조회수 증가 - by 1-blue */
  async addViewCount(body: AddViewCountPostDto) {
    return await this.postRepository.addViewCount(body);
  }
}
