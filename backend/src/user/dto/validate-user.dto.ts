import { IsOptional, IsString, Matches } from "class-validator";

export class ValidateUserDto {
  // 알파벳과 숫자 하나 이상 입력 및 다른 문자 입력 불가능
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/)
  @IsString()
  @IsOptional()
  id: string;

  // 알파벳, 숫자, 특수문자를 하나 이상 입력하고 그 이외의 문자 입력 불가능
  @Matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/)
  @IsString()
  @IsOptional()
  password: string;
}
