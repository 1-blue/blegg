import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  @ApiProperty({
    type: String,
    description: `게시글 제목`,
    required: true,
    example: "[Swagger] 테스트 게시글",
  })
  @IsString()
  title: string;

  @ApiProperty({
    type: String,
    description: `게시글 내용`,
    required: true,
    example: "대충 테스트 게시글 내용 🐶",
  })
  @IsString()
  content: string;

  @ApiProperty({
    type: String,
    description: `baseURL을 제외한 게시글 썸네일 경로`,
    required: false,
    example: "avatar.png",
  })
  @IsOptional()
  @IsString()
  thumbnail?: string;
}
