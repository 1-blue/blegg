import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, map } from "rxjs";

import type { RiotAccount } from "./models/account.model";

@Injectable()
export class AccountService {
  private readonly httpService: HttpService;
  private readonly configService: ConfigService;
  constructor(httpService: HttpService, configService: ConfigService) {
    this.httpService = httpService;
    this.configService = configService;
  }

  /** 2023/06/28 - 계정 정보 얻기 - by 1-blue */
  async findByName(name: string): Promise<RiotAccount> {
    const TOKEN = this.configService.get<string>("keys.riot");

    try {
      const account = await firstValueFrom<RiotAccount>(
        this.httpService
          .get(
            `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
            { headers: { "X-Riot-Token": TOKEN } },
          )
          .pipe(map((res) => res.data)),
      );

      return account;
    } catch (error) {
      throw new NotFoundException("존재하지 않는 소환사입니다.");
    }
  }
}
