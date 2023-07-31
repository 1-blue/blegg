import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateHelloDto {
  @ApiProperty({
    type: String,
    description: `테스트로 등록할 문구`,
    required: true,
    example: "[Swagger] 이거 생성하면 개발자",
  })
  @IsString()
  content: string;
}
