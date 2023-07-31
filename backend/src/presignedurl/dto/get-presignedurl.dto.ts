import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class GetPresginedurlDto {
  @ApiProperty({
    type: String,
    description: `이미지이름.확장자`,
    required: true,
    example: "avatar.png",
  })
  @IsString()
  name: string;
}
