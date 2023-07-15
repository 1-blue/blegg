import { Type } from "class-transformer";
import { IsNumber } from "class-validator";

export class DeletePostDto {
  @Type(() => Number)
  @IsNumber()
  idx: number;
}
