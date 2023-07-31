import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCommentDto {
  @ApiProperty({
    type: String,
    description: `댓글 내용`,
    required: true,
    example: "[Swagger] 테스트 댓글",
  })
  @IsString()
  content: string;
}
