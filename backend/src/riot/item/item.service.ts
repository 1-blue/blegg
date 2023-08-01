import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";

import { convertToItemImageURL } from "src/libs";

import type { RiotItems } from "./model/item.model";
import type {
  ApiResponseItem,
  ApiResponseItems,
} from "./interface/item.interface";

@Injectable()
export class ItemService {
  private readonly httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  /** 2023/06/29 - 모든 아이템 정보 요청 - by 1-blue */
  async findAll(): Promise<ApiResponseItems> {
    try {
      const item = await firstValueFrom<ApiResponseItems>(
        this.httpService
          .get(
            `http://ddragon.leagueoflegends.com/cdn/${process.env.RIOT_VERSION}/data/${process.env.RIOT_LANGUAGE}/item.json`,
          )
          .pipe(
            map((res) => res.data),
            map<RiotItems, ApiResponseItems>((res) =>
              Object.entries(res.data).map(([k, v]) => ({
                id: k,
                name: v.name,
                description: v.description,
                plaintext: v.plaintext,
                colloq: v.colloq.split(/;+/).filter(Boolean),
                imageSrc: convertToItemImageURL(k),
                gold: {
                  total: v.gold.total,
                  sell: v.gold.sell,
                },
                totalDescription:
                  (v.plaintext ? v.plaintext + "<br /><br />" : "") +
                  v.description,
              })),
            ),
          ),
      );

      return item;
    } catch (error) {
      console.error("/riot/item findAll >> ", error);
    }
  }

  /** 2023/06/29 - 특정 아이템 정보 요청 - by 1-blue */
  async findOne(id: string): Promise<ApiResponseItem> {
    const items = await this.findAll();

    const item = items.find((item) => item.id === id);

    if (!item) {
      throw new NotFoundException("존재하지 않는 아이템입니다.");
    }

    return item;
  }
}
