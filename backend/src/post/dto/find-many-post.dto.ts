import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class FindManyPost {
  @Transform(({ value }) => parseInt(value || -1))
  @IsNumber()
  @IsOptional()
  start = -1;

  @Transform(({ value }) => parseInt(value || 20))
  @IsNumber()
  @IsOptional()
  count = 20;

  @Transform(({ value }) => value || "recent")
  @IsString()
  @IsOptional()
  sortBy = "recent";

  @IsString()
  @IsOptional()
  search: string;
}
