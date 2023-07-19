import { IsOptional, IsString } from "class-validator";

export class UpdateMeDto {
  @IsString()
  nickname: string;

  @IsString()
  summonerName: string;

  @IsString()
  @IsOptional()
  avatar?: string;
}
