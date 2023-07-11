import { Injectable } from "@nestjs/common";

import { PostRepository } from "./post.repository";

import { CreatePostDto } from "./dto/create-post.dto";
import { FindOnePost } from "./dto/find-one-post.dto";
import { FindManyPost } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { DeletePost } from "./dto/delete-post.dto";

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
  async findOne(body: FindOnePost) {
    return await this.postRepository.findOne(body);
  }

  /** 2023/07/11 - 게시글들 찾기 - by 1-blue */
  async findMany(body: FindManyPost) {
    return await this.postRepository.findMany(body);
  }

  /** 2023/07/11 - 게시글 수정 - by 1-blue */
  async update(body: FindOnePost & UpdatePostDto) {
    return await this.postRepository.update(body);
  }

  /** 2023/07/11 - 게시글 삭제 - by 1-blue */
  async delete(body: DeletePost) {
    return await this.postRepository.delete(body);
  }
}
