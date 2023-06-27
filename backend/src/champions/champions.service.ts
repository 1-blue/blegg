import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, map } from "rxjs";

import { DDRANGON_BASE_URL, LANGUAGE, VERSION } from "src/config/riot";

import { convertToChampionSquareImageURL } from "src/libs";

import type {
  Champions,
  RiotChampionData,
  RiotChampions,
} from "./interfaces/champions.interface";

@Injectable()
export class ChampionsService {
  private readonly httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  async get(): Promise<Champions> {
    const data = await firstValueFrom<Champions>(
      this.httpService
        .get(
          `${DDRANGON_BASE_URL}/cdn/${VERSION}/data/${LANGUAGE}/champion.json`,
        )
        .pipe(
          map((res) => res.data.data),
          map<RiotChampions, Champions>((champions) =>
            Object.values<RiotChampionData>(champions).map((champion) => ({
              id: champion.id,
              name: champion.name,
              title: champion.title,
              src: convertToChampionSquareImageURL(champion.id),
              info: champion.info,
              stats: champion.stats,
              tags: champion.tags,
            })),
          ),
        ),
    );

    return data;
  }
}
