import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, map } from "rxjs";

import type { RiotLeague, RiotLeagueType } from "./model/league";
import type { ApiResponseLeague } from "./interface/league.interface";

const getBaseURL = (league: RiotLeagueType) =>
  `https://kr.api.riotgames.com/lol/league/v4/${league}leagues/by-queue/RANKED_SOLO_5x5`;

@Injectable()
export class LeagueService {
  private readonly httpService: HttpService;
  private readonly configService: ConfigService;
  constructor(httpService: HttpService, configService: ConfigService) {
    this.httpService = httpService;
    this.configService = configService;
  }

  /** 2023/07/24 - 챌린저 || 그랜드마스터 || 마스터 티어 유저 정보 요청 - by 1-blue */
  async findLeagues(leagueType: RiotLeagueType) {
    const TOKEN = this.configService.get<string>("keys.riot");

    const data = await firstValueFrom<ApiResponseLeague>(
      this.httpService
        .get(getBaseURL(leagueType), { headers: { "X-Riot-Token": TOKEN } })
        .pipe(
          map((res) => res.data),
          map<RiotLeague, ApiResponseLeague>((league) =>
            league.entries.map((entry) => ({
              tier: league.tier,
              summonerName: entry.summonerName,
              rank: entry.rank,
              leaguePoints: entry.leaguePoints,
              wins: entry.wins,
              losses: entry.losses,
            })),
          ),
          map<ApiResponseLeague, ApiResponseLeague>((league) =>
            league.sort((a, b) => b.leaguePoints - a.leaguePoints),
          ),
        ),
    );

    return data;
  }
}
