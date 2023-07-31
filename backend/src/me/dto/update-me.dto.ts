import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class UpdateMeDto {
  @ApiProperty({
    type: String,
    description: `( 원래 || 수정할 ) 별칭`,
    required: true,
    example: "나의 개발일지 - 수정",
  })
  @IsString()
  nickname: string;

  @ApiProperty({
    type: String,
    description: `( 원래 || 수정할 ) 리그오브레전드 소환사 이름`,
    required: true,
    example: "라플라스의 마녀",
  })
  @IsString()
  summonerName: string;

  @ApiProperty({
    type: String,
    description: `수정할 아바타 URL`,
    required: true,
    example: `http://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/5799.png`,
  })
  @IsString()
  @IsOptional()
  avatar?: string;
}
