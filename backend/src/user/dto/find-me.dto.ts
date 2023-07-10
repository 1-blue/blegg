import { IsNumber } from "class-validator";

export class FindMeDto {
  @IsNumber()
  idx: string;
}
