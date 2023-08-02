import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Matches } from "class-validator";

export class SignInDto {
  @ApiProperty({
    type: String,
    description: `아이디`,
    required: true,
    example: "1blue",
  })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/) // 알파벳과 숫자 하나 이상 입력 및 다른 문자 입력 불가능
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty({
    type: String,
    description: `비밀번호`,
    required: true,
    example: "123456789a!",
  })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/) // 알파벳, 숫자, 특수문자를 하나 이상 입력하고 그 이외의 문자 입력 불가능
  @IsString()
  @IsOptional()
  password: string;

  @ApiProperty({
    type: String,
    description: `해당 사이트에서 사용할 닉네임`,
    required: true,
    example: "나의 개발일지",
  })
  @IsString()
  @IsOptional()
  nickname: string;

  @ApiProperty({
    type: String,
    description: `리그오브레전드에서 사용하는 소환사 이름`,
    required: false,
    example: "나의 개발일지",
  })
  @IsString()
  @IsOptional()
  summonerName: string;
}
