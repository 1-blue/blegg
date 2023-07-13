import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class RatingPostDto {
  @Type(() => Number)
  @IsNumber()
  idx: number;
}
