import { Module } from "@nestjs/common";

import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { PostRepository } from "./post.repository";

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
