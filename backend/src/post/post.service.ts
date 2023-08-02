import { Injectable } from "@nestjs/common";

import { PostRepository } from "./post.repository";

import { CreatePostDto } from "./dto/create-post.dto";
import { FindManyPostDto } from "./dto/find-many-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { UpdateCommentDto } from "./dto/update-comment.dto";
import { FindManyCommentDto } from "./dto/find-many-comment.dto";

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

  /** 2023/07/16 - 댓글 추가 - by 1-blue */
  async createComment(
    postIdx: number,
    body: CreateCommentDto,
    userIdx: number,
  ) {
    return await this.postRepository.createComment(postIdx, body, userIdx);
  }
  /** 2023/07/16 - 댓글들 조회 - by 1-blue */
  async findManyComment(postIdx: number, body: FindManyCommentDto) {
    return await this.postRepository.findManyComment(postIdx, body);
  }
  /** 2023/07/16 - 댓글 수정 - by 1-blue */
  async updateComment(
    postIdx: number,
    commentIdx: number,
    body: UpdateCommentDto,
  ) {
    return await this.postRepository.updateComment(postIdx, commentIdx, body);
  }
  /** 2023/07/16 - 댓글 삭제 - by 1-blue */
  async deleteComment(postIdx: number, commentIdx: number) {
    return await this.postRepository.deleteComment(postIdx, commentIdx);
  }

  /** 2023/07/18 - 답글 추가 - by 1-blue */
  async createReply(
    postIdx: number,
    commentIdx: number,
    body: CreateCommentDto,
    userIdx: number,
  ) {
    return await this.postRepository.createReply(
      postIdx,
      commentIdx,
      body,
      userIdx,
    );
  }
  /** 2023/07/18 - 답글들 조회 - by 1-blue */
  async findManyReply(
    postIdx: number,
    commentIdx: number,
    body: FindManyCommentDto,
  ) {
    return await this.postRepository.findManyReply(postIdx, commentIdx, body);
  }
  /** 2023/07/18 - 답글 수정 - by 1-blue */
  async updateReply(
    postIdx: number,
    commentIdx: number,
    replyIdx: number,
    body: UpdateCommentDto,
  ) {
    return await this.postRepository.updateReply(
      postIdx,
      commentIdx,
      replyIdx,
      body,
    );
  }
  /** 2023/07/18 - 답글 삭제 - by 1-blue */
  async deleteReply(postIdx: number, commentIdx: number, replyIdx: number) {
    return await this.postRepository.deleteReply(postIdx, commentIdx, replyIdx);
  }
}
