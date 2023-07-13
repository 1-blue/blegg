import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class FindOnePostDto {
  @Type(() => Number)
  @IsNumber()
  idx: number;
}