import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FindManyCommentDto {
  @Transform(({ value }) => parseInt(value || -1))
  @IsNumber()
  @IsOptional()
  start = -1;

  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;
}
