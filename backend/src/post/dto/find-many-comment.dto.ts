import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FindManyCommentDto {
  @ApiProperty({
    type: Number,
    description: `패치를 시작할 답글의 식별자 ( 이전 답글 이후의 답글을 불러오는 경우 사용 )`,
    required: false,
    example: -1,
  })
  @Transform(({ value }) => parseInt(value || -1))
  @IsNumber()
  @IsOptional()
  start = -1;

  @ApiProperty({
    type: Number,
    description: `불러올 답글 개수`,
    required: false,
    example: 20,
  })
  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;
}
