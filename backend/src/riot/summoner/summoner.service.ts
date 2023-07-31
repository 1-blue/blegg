import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, map } from "rxjs";

import { convertToIconImageURL } from "src/libs";

import { AccountService } from "../account/account.service";

import type { ApiResponseSummoner } from "./interface/find-summoner-by-name.interface";
import type { RiotLeagueEntry } from "./model/summoner.model";

@Injectable()
export class SummonerService {
  private readonly httpService: HttpService;
  private readonly configService: ConfigService;
  private readonly accountService: AccountService;
  constructor(
    httpService: HttpService,
    configService: ConfigService,
    accountService: AccountService,
  ) {
    this.httpService = httpService;
    this.configService = configService;
    this.accountService = accountService;
  }

  /** 2023/06/29 - 특정 소환사 정보 및 솔로/자유랭크 정보 얻기 - by 1-blue */
  async findByName(name: string): Promise<ApiResponseSummoner> {
    const TOKEN = this.configService.get<string>("keys.riot");

    // 계정 정보 얻기
    const account = await this.accountService.findByName(name);

    // 계정 정보를 통해 얻는 소환사 ID를 이용해서 소환사 정보 얻기
    const { id } = account;
    const summoner = await firstValueFrom<ApiResponseSummoner>(
      this.httpService
        .get(
          `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}`,
          { headers: { "X-Riot-Token": TOKEN } },
        )
        .pipe(
          map((res) => res.data),
          map<RiotLeagueEntry[], ApiResponseSummoner>((leagueEntry) => {
            /** 솔로랭크 정보 */
            const soloRank = leagueEntry.find(
              (v) => v.queueType === "RANKED_SOLO_5x5",
            );
            /** 자유랭크 정보 */
            const freeRank = leagueEntry.find(
              (v) => v.queueType === "RANKED_FLEX_SR",
            );

            return {
              // 소환사 정보
              info: {
                name: account.name,
                level: account.summonerLevel,
                profileIconSrc: convertToIconImageURL(account.profileIconId),
              },
              // 솔로랭크 정보
              soloRank: soloRank && {
                tier: soloRank.tier,
                rank: soloRank.rank,
                leaguePoints: soloRank.leaguePoints,
                wins: soloRank.wins,
                losses: soloRank.losses,
              },
              // 자유랭크 정보
              freeRank: freeRank && {
                tier: freeRank.tier,
                rank: freeRank.rank,
                leaguePoints: freeRank.leaguePoints,
                wins: freeRank.wins,
                losses: freeRank.losses,
              },
            };
          }),
        ),
    );

    return summoner;
  }
}
