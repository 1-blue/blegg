import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FindManyByNameDto {
  @ApiProperty({
    type: Number,
    description: `요청할 전적의 시작 지점의 식별자 ( 이전에 요청을 했다면 그 다음 전적부터 요청하기 위해 사용 )`,
    required: false,
  })
  @Transform(({ value }) => parseInt(value || 0))
  @IsNumber()
  @IsOptional()
  start = 0;

  @ApiProperty({
    type: Number,
    description: `요청할 전적 개수`,
    required: false,
  })
  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;
}
