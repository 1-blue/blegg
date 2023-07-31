import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Matches } from "class-validator";

export class ValidateUserDto {
  @ApiProperty({
    type: String,
    description: `유저 아이디`,
    required: false,
    example: "1blue",
  })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/) // 알파벳과 숫자 하나 이상 입력 및 다른 문자 입력 불가능
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty({
    type: String,
    description: `유저 비밀번호`,
    required: false,
    example: "123456789a!",
  })
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/) // 알파벳, 숫자, 특수문자를 하나 이상 입력하고 그 이외의 문자 입력 불가능
  @IsString()
  @IsOptional()
  password: string;
}
