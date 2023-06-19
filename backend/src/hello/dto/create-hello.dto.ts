import { IsString } from "class-validator";

export class CreateHelloDto {
  @IsString()
  content: string;
}
