import { Transform } from "class-transformer";
import { IsNumber, IsOptional } from "class-validator";

export class FindManyByNameDto {
  @Transform(({ value }) => parseInt(value || 0))
  @IsNumber()
  @IsOptional()
  start = 0;

  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;
}
