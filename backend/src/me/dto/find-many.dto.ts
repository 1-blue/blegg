import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FindManyDto {
  @ApiProperty({
    type: Number,
    description: `패치를 시작할 것의 식별자 ( 이전 것 이후의 것을 불러오는 경우 사용 )`,
    required: false,
    example: -1,
  })
  @Transform(({ value }) => parseInt(value || -1))
  @IsNumber()
  @IsOptional()
  start = -1;

  @ApiProperty({
    type: String,
    description: `불러올 개수`,
    required: false,
    example: 20,
  })
  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;
}
