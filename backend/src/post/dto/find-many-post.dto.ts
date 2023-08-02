import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class FindManyPostDto {
  @ApiProperty({
    type: Number,
    description: `패치를 시작할 게시글의 식별자 ( 이전 게시글 이후의 게시글을 불러오는 경우 사용 )`,
    required: false,
    example: -1,
  })
  @Transform(({ value }) => parseInt(value || -1))
  @IsNumber()
  @IsOptional()
  start = -1;

  @ApiProperty({
    type: Number,
    description: `패치할 게시글 개수`,
    required: false,
    example: 20,
  })
  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;

  @ApiProperty({
    type: String,
    description: `패치할 게시글 종류`,
    required: false,
    examples: {
      최신순: { value: "recent" },
      조회순: { value: "viewed" },
      인기순: { value: "popular" },
    },
  })
  @Transform(({ value }) => value || "recent")
  @IsString()
  @IsOptional()
  sortBy = "recent";

  @ApiProperty({
    type: String,
    description: `게시글 검색 시 제목 or 내용에서 검색할 텍스트`,
    required: false,
    example: "제목1",
  })
  @IsString()
  @IsOptional()
  search: string;
}
