import { IsNumber } from "class-validator";

export class FindOnePost {
  @IsNumber()
  idx: number;
}
