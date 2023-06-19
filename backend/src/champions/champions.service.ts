import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, map } from "rxjs";

import { DDRANGON_BASE_URL, LANGUAGE, VERSION } from "src/config/riot";
import type { Champions } from "./interfaces/champions.interface";

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
        .pipe(map((res) => res.data.data)),
    );

    return data;
  }
}
