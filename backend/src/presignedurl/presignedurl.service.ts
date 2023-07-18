import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { S3 } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";

import { GetPresginedurlDto } from "./dto/get-presignedurl.dto";

@Injectable()
export class PresignedurlService {
  private readonly configService: ConfigService;
  constructor(configService: ConfigService) {
    this.configService = configService;
  }

  /** 2023/07/14 - AWS-S3의 presignedURL 요청 - by 1-blue */
  async getPresignedURL({ name }: GetPresginedurlDto) {
    // S3 연결
    const client = new S3({
      region: this.configService.get("aws.region"),
      credentials: {
        accessKeyId: this.configService.get("aws.key"),
        secretAccessKey: this.configService.get("aws.secretKey"),
      },
    });

    const [filename, ext] = name.split(".");

    // POST로 요청해야하는 presignedURL 생성
    return await createPresignedPost(client, {
      Bucket: this.configService.get("aws.bucket"),
      Key:
        `${this.configService.get("env")}/images/` +
        `${filename}_${Date.now()}.${ext}`,
      Expires: 60,
      Conditions: [
        ["content-length-range", 0, 50 * 1024 ** 2],
        ["starts-with", "$Content-Type", "image/"],
      ],
    });
  }
}
