import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { firstValueFrom, map } from "rxjs";

import { convertToChampionSquareImageURL, queueIdCoords } from "src/libs";

import { AccountService } from "../account/account.service";

import { FindManyByNameDto } from "./dto/find-many-by-name.dto";
import type { RiotMatch } from "./model/find-matches-by-name.model";
import type { ApiResponseMatch } from "./interface/find-matches-by-name.interface";

@Injectable()
export class MatchService {
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

  /** 2023/06/29 - 특정 소환사 최근 전적 얻기 */
  async findManyByName(
    name: string,
    { start, count }: FindManyByNameDto,
  ): Promise<ApiResponseMatch[]> {
    const TOKEN = this.configService.get<string>("keys.riot");

    // 계정 정보 얻기
    const account = await this.accountService.findByName(name);

    // 특정 계정의 최근 경기들 기록 얻기 - 1 ( MatchId들 얻기 )
    const { puuid } = account;
    const matchIds = await firstValueFrom<string[]>(
      this.httpService
        .get(
          `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`,
          { headers: { "X-Riot-Token": TOKEN } },
        )
        .pipe(map((res) => res.data)),
    );

    // 특정 계정의 최근 경기들 기록 얻기 - 2 ( MatchId들을 이용해서 경기 기록 얻기 )
    const promiseMatches = matchIds.map((matchId) =>
      firstValueFrom<ApiResponseMatch>(
        this.httpService
          .get(
            `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`,
            { headers: { "X-Riot-Token": TOKEN } },
          )
          .pipe(
            map((res) => res.data),
            map<RiotMatch, ApiResponseMatch>((match) => {
              const targetPlayer = match.info.participants.find(
                (v) => v.summonerName.toLowerCase() === name.toLowerCase(),
              );

              return {
                // 게임 정보
                info: {
                  id: match.info.gameId,
                  mode: queueIdCoords[match.info.queueId],
                  win: targetPlayer.win,
                  time: {
                    start: match.info.gameStartTimestamp,
                    end: match.info.gameEndTimestamp,
                    play:
                      match.info.gameEndTimestamp -
                      match.info.gameStartTimestamp,
                  },
                },

                // 플레이어 정보
                player: {
                  // 정보
                  info: {
                    /** 이름 */
                    name: targetPlayer.summonerName,
                    /** 포지션 */
                    position: targetPlayer.teamPosition,
                    /** 라인 */
                    lane: targetPlayer.lane,
                  },
                  // 챔피언
                  champion: {
                    /** 이름 FIXME: 예외적으로 매치에서 받는 챔피언 이름과 이미지로 사용하는 이름이 다름 */
                    name:
                      targetPlayer.championName === "FiddleSticks"
                        ? "Fiddlesticks"
                        : targetPlayer.championName,
                    /** 레벨 */
                    level: targetPlayer.champLevel,
                    /** 이미지 경로 */
                    imageSrc: convertToChampionSquareImageURL(
                      targetPlayer.championName,
                    ),
                  },
                  // KDA/킬/데스/어시/CS
                  scores: {
                    /** KDA */
                    kda: +(targetPlayer.challenges?.kda || 0).toFixed(2),
                    /** 킬수 */
                    kills: targetPlayer.kills,
                    /** 어시스트 */
                    assists: targetPlayer.assists,
                    /** 죽은 횟수 */
                    deaths: targetPlayer.deaths,
                    /** 더블킬 횟수 */
                    doubleKills: targetPlayer.doubleKills,
                    /** 트리플킬 횟수 */
                    tripleKills: targetPlayer.tripleKills,
                    /** 쿼드라킬 횟수 */
                    quadraKills: targetPlayer.quadraKills,
                    /** 펜타킬 횟수 */
                    pentaKills: targetPlayer.pentaKills,
                    /** 미니언 처치 횟수 */
                    cs: {
                      minion: targetPlayer.totalMinionsKilled,
                      jungle: targetPlayer.neutralMinionsKilled,
                      // 전체 미니언 개수 / 플레이타임(분)
                      average: +(
                        (targetPlayer.totalMinionsKilled +
                          targetPlayer.neutralMinionsKilled) /
                        ((match.info.gameEndTimestamp -
                          match.info.gameStartTimestamp) /
                          1000 /
                          60)
                      ).toFixed(1),
                    },
                  },
                  // 스펠 key ( D, F 순서 )
                  spellKeys: [
                    targetPlayer.summoner1Id,
                    targetPlayer.summoner2Id,
                  ],
                  // 구매한 아이템 Id
                  itemIds: [
                    /** 1번째 아이템 Id */
                    targetPlayer.item0,
                    /** 2번째 아이템 Id */
                    targetPlayer.item1,
                    /** 3번째 아이템 Id */
                    targetPlayer.item2,
                    /** 4번째 아이템 Id */
                    targetPlayer.item3,
                    /** 5번째 아이템 Id */
                    targetPlayer.item4,
                    /** 6번째 아이템 Id */
                    targetPlayer.item5,
                    /** 장신구 아이템 Id */
                    targetPlayer.item6,
                    /** 총 아이템 구매 횟수 */
                    targetPlayer.itemsPurchased,
                  ],
                },

                // red팀 플레이어 정보 ( 5인 )
                redTeam: match.info.participants
                  .slice(0, 5)
                  .map((participant) => ({
                    // 소환사
                    summoner: {
                      /** 소환사 이름 */
                      name: participant.summonerName,
                      /** 소환사 포지션 */
                      position: participant.teamPosition,
                      /** 소환사 라인 */
                      lane: participant.lane,
                    },

                    // 챔피언
                    champion: {
                      /** 챔피언 이름 FIXME: 예외적으로 매치에서 받는 챔피언 이름과 이미지로 사용하는 이름이 다름 */
                      name:
                        participant.championName === "FiddleSticks"
                          ? "Fiddlesticks"
                          : participant.championName,
                      /** 챔피언 레벨 */
                      level: participant.champLevel,
                      /** 챔피언 이미지 경로 */
                      imageSrc: convertToChampionSquareImageURL(
                        participant.championName === "FiddleSticks"
                          ? "Fiddlesticks"
                          : participant.championName,
                      ),
                    },
                  })),
                // blue팀 플레이어 정보 ( 5인 )
                blueTeam: match.info.participants
                  .slice(5)
                  .map((participant) => ({
                    // 소환사
                    summoner: {
                      /** 소환사 이름 */
                      name: participant.summonerName,
                      /** 소환사 포지션 */
                      position: participant.teamPosition,
                      /** 소환사 라인 */
                      lane: participant.lane,
                    },

                    // 챔피언
                    champion: {
                      /** 챔피언 이름 FIXME: 예외적으로 매치에서 받는 챔피언 이름과 이미지로 사용하는 이름이 다름 */
                      name:
                        participant.championName === "FiddleSticks"
                          ? "Fiddlesticks"
                          : participant.championName,
                      /** 챔피언 레벨 */
                      level: participant.champLevel,
                      /** 챔피언 이미지 경로 */
                      imageSrc: convertToChampionSquareImageURL(
                        participant.championName === "FiddleSticks"
                          ? "Fiddlesticks"
                          : participant.championName,
                      ),
                    },
                  })),
              };
            }),
          ),
      ),
    );
    const matches = await Promise.all(promiseMatches);

    return matches;
  }
}
