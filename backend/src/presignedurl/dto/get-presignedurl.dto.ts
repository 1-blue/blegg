import { IsString } from "class-validator";

export class GetPresginedurlDto {
  @IsString()
  name: string;
}
