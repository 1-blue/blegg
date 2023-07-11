import { IsNumber } from "class-validator";

export class DeletePost {
  @IsNumber()
  idx: number;
}
