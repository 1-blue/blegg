import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

import { ItemService } from "./item.service";
import type {
  ApiResponseItem,
  ApiResponseItems,
} from "./interface/item.interface";

const { RIOT_VERSION, RIOT_LANGUAGE } = process.env;

@Controller("riot/item")
@ApiTags("Riot API")
export class ItemController {
  private readonly itemService: ItemService;
  constructor(itemService: ItemService) {
    this.itemService = itemService;
  }

  /** 2023/06/29 - 모든 아이템 정보 요청 - by 1-blue */
  @Get()
  @ApiOperation({
    summary: "모든 아이템의 정보 요청",
    description: `모든 아이템의 정보를 얻는 API ( [참고 라이엇 API](https://ddragon.leagueoflegends.com/cdn/${RIOT_VERSION}/data/${RIOT_LANGUAGE}/item.json) )`,
  })
  @ApiResponse({
    status: 200,
    description: "모든 아이템의 정보 반환",
    schema: {
      example: [
        {
          id: "1001",
          name: "장화",
          description:
            "<mainText><stats>이동 속도 <attention>25</attention></stats></mainText><br>",
          plaintext: "이동 속도가 약간 증가합니다.",
          colloq: ["똥신", "boots", "speed"],
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/1001.png",
          gold: {
            total: 300,
            sell: 210,
          },
          totalDescription:
            "이동 속도가 약간 증가합니다.<br /><br /><mainText><stats>이동 속도 <attention>25</attention></stats></mainText><br>",
        },
        {
          id: "1004",
          name: "요정의 부적",
          description:
            "<mainText><stats>기본 마나 재생 <attention>50%</attention></stats></mainText><br>",
          plaintext: "마나 재생량이 약간 증가합니다.",
          colloq: ["요부", "faerie", "charm"],
          imageSrc:
            "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/1004.png",
          gold: {
            total: 250,
            sell: 175,
          },
          totalDescription:
            "마나 재생량이 약간 증가합니다.<br /><br /><mainText><stats>기본 마나 재생 <attention>50%</attention></stats></mainText><br>",
        },
      ],
    },
  })
  async findAll(): Promise<ApiResponseItems> {
    return this.itemService.findAll();
  }

  /** 2023/06/29 - 특정 아이템 정보 요청 - by 1-blue */
  @Get(":id")
  @ApiOperation({
    summary: "특정 아이템의 정보 요청",
    description: `특정 아이템의 정보를 얻는 API ( [참고 라이엇 API](https://ddragon.leagueoflegends.com/cdn/${RIOT_VERSION}/data/${RIOT_LANGUAGE}/item.json) )`,
  })
  @ApiParam({
    name: "id",
    description: "검색할 아이템 식별자 ( 라이엇에서 정한 식별자 )",
    type: "string",
    example: "1001",
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 소환사에 대한 정보 반환",
    schema: {
      example: {
        id: "1001",
        name: "장화",
        description:
          "<mainText><stats>이동 속도 <attention>25</attention></stats></mainText><br>",
        plaintext: "이동 속도가 약간 증가합니다.",
        colloq: ["똥신", "boots", "speed"],
        imageSrc:
          "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/item/1001.png",
        gold: {
          total: 300,
          sell: 210,
        },
        totalDescription:
          "이동 속도가 약간 증가합니다.<br /><br /><mainText><stats>이동 속도 <attention>25</attention></stats></mainText><br>",
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: "존재하지 않는 아이템",
    schema: {
      example: {
        message: "존재하지 않는 아이템입니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findOne(@Param("id") id: string): Promise<ApiResponseItem> {
    return this.itemService.findOne(id);
  }
}
