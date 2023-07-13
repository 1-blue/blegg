import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class AddViewCountPostDto {
  @Type(() => Number)
  @IsNumber()
  idx: number;
}
