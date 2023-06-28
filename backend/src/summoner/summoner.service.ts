import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, map } from "rxjs";

import type {
  ApiResponseSummoner,
  RiotLeagueEntry,
  RiotSummoner,
} from "./interfaces/summoner.interface";
import { convertToIconImageURL } from "src/libs";

@Injectable()
export class SummonerService {
  private readonly httpService: HttpService;
  private readonly configService: ConfigService;
  constructor(httpService: HttpService, configService: ConfigService) {
    this.httpService = httpService;
    this.configService = configService;
  }

  async findSummoner({ name }: { name: string }): Promise<ApiResponseSummoner> {
    const TOKEN = this.configService.get<string>("keys.riot");

    // 계정 정보 얻기
    const account = await firstValueFrom<RiotSummoner>(
      this.httpService
        .get(
          `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}`,
          { headers: { "X-Riot-Token": TOKEN } },
        )
        .pipe(map((res) => res.data)),
    );

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
              summoner: {
                name: account.name,
                summonerLevel: account.summonerLevel,
                profileIconSrc: convertToIconImageURL(account.profileIconId),
              },
              // 솔로랭크 정보
              RANKED_SOLO_5x5: soloRank && {
                tier: soloRank.tier,
                rank: soloRank.rank,
                summonerName: soloRank.summonerName,
                leaguePoints: soloRank.leaguePoints,
                wins: soloRank.wins,
                losses: soloRank.losses,
              },
              // 자유랭크 정보
              RANKED_FLEX_SR: freeRank && {
                tier: freeRank.tier,
                rank: freeRank.rank,
                summonerName: freeRank.summonerName,
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
