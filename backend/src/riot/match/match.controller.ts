import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from "@nestjs/swagger";

import { MatchService } from "./match.service";

import { FindManyByNameDto } from "./dto/find-many-by-name.dto";
import type { ApiResponseMatch } from "./interface/find-matches-by-name.interface";

@Controller("riot/match")
@ApiTags("Riot API")
export class MatchController {
  private matchService: MatchService;

  constructor(matchService: MatchService) {
    this.matchService = matchService;
  }

  /** 2023/06/29 - 특정 소환사 최근 전적 얻기 - by 1-blue */
  @Get(":name")
  @ApiOperation({
    summary: "특정 소환사 최근 전적 얻기",
    description: `특정 소환사 최근 전적 얻는 API ( [참고 라이엇 API - 특정 계정의 경기 식별자](https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID), [참고 라이엇 API - 특정 경기의 기록](https://developer.riotgames.com/apis#match-v5/GET_getMatch) )`,
  })
  @ApiParam({
    name: "name",
    description: "검색할 소환사 이름",
    type: "string",
    example: "Akaps",
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: "검색된 소환사에 대한 정보 반환",
    schema: {
      example: [
        {
          info: {
            id: 6587959217,
            mode: "솔로랭크",
            win: true,
            time: {
              start: 1689083808242,
              end: 1689085833485,
              play: 2025243,
            },
          },
          player: {
            info: {
              name: "Akaps",
              position: "TOP",
              lane: "JUNGLE",
            },
            champion: {
              name: "Ryze",
              level: 18,
              imageSrc:
                "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ryze.png",
            },
            scores: {
              kda: 2,
              kills: 6,
              assists: 8,
              deaths: 7,
              doubleKills: 0,
              tripleKills: 0,
              quadraKills: 0,
              pentaKills: 0,
              cs: {
                minion: 262,
                jungle: 15,
                average: 8.2,
              },
            },
            spellKeys: [4, 12],
            itemIds: [3157, 3040, 3020, 0, 6655, 3135, 3363, 29],
          },
          redTeam: [
            {
              summoner: {
                name: "Akaps",
                position: "TOP",
                lane: "JUNGLE",
              },
              champion: {
                name: "Ryze",
                level: 18,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ryze.png",
              },
            },
            {
              summoner: {
                name: "교전 장인",
                position: "JUNGLE",
                lane: "JUNGLE",
              },
              champion: {
                name: "LeeSin",
                level: 17,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/LeeSin.png",
              },
            },
            {
              summoner: {
                name: "사일러슛",
                position: "MIDDLE",
                lane: "MIDDLE",
              },
              champion: {
                name: "Gragas",
                level: 16,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Gragas.png",
              },
            },
            {
              summoner: {
                name: "마스터라는 벽",
                position: "BOTTOM",
                lane: "BOTTOM",
              },
              champion: {
                name: "MissFortune",
                level: 17,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/MissFortune.png",
              },
            },
            {
              summoner: {
                name: "메가 냥냥이",
                position: "UTILITY",
                lane: "BOTTOM",
              },
              champion: {
                name: "Milio",
                level: 15,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Milio.png",
              },
            },
          ],
          blueTeam: [
            {
              summoner: {
                name: "2022112920240527",
                position: "TOP",
                lane: "TOP",
              },
              champion: {
                name: "Gangplank",
                level: 18,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Gangplank.png",
              },
            },
            {
              summoner: {
                name: "qead13",
                position: "JUNGLE",
                lane: "JUNGLE",
              },
              champion: {
                name: "Nidalee",
                level: 16,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Nidalee.png",
              },
            },
            {
              summoner: {
                name: "견 생",
                position: "MIDDLE",
                lane: "MIDDLE",
              },
              champion: {
                name: "Talon",
                level: 17,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Talon.png",
              },
            },
            {
              summoner: {
                name: "뿌요야 물지마",
                position: "BOTTOM",
                lane: "BOTTOM",
              },
              champion: {
                name: "Xayah",
                level: 17,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Xayah.png",
              },
            },
            {
              summoner: {
                name: "국뽕대장",
                position: "UTILITY",
                lane: "BOTTOM",
              },
              champion: {
                name: "Pyke",
                level: 15,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Pyke.png",
              },
            },
          ],
        },
        {
          info: {
            id: 6587614756,
            mode: "솔로랭크",
            win: false,
            time: {
              start: 1689074888857,
              end: 1689076367236,
              play: 1478379,
            },
          },
          player: {
            info: {
              name: "Akaps",
              position: "TOP",
              lane: "TOP",
            },
            champion: {
              name: "Gnar",
              level: 13,
              imageSrc:
                "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Gnar.png",
            },
            scores: {
              kda: 0.5,
              kills: 2,
              assists: 2,
              deaths: 8,
              doubleKills: 0,
              tripleKills: 0,
              quadraKills: 0,
              pentaKills: 0,
              cs: {
                minion: 174,
                jungle: 4,
                average: 7.2,
              },
            },
            spellKeys: [4, 12],
            itemIds: [3078, 2031, 3111, 3181, 0, 1055, 3363, 19],
          },
          redTeam: [
            {
              summoner: {
                name: "호수 아래 별",
                position: "TOP",
                lane: "MIDDLE",
              },
              champion: {
                name: "Rumble",
                level: 14,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Rumble.png",
              },
            },
            {
              summoner: {
                name: "nulizilv",
                position: "JUNGLE",
                lane: "JUNGLE",
              },
              champion: {
                name: "Ivern",
                level: 14,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Ivern.png",
              },
            },
            {
              summoner: {
                name: "딩 푸",
                position: "MIDDLE",
                lane: "MIDDLE",
              },
              champion: {
                name: "Tristana",
                level: 15,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Tristana.png",
              },
            },
            {
              summoner: {
                name: "sover",
                position: "BOTTOM",
                lane: "MIDDLE",
              },
              champion: {
                name: "Kaisa",
                level: 13,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Kaisa.png",
              },
            },
            {
              summoner: {
                name: "Leonamusician",
                position: "UTILITY",
                lane: "MIDDLE",
              },
              champion: {
                name: "Nautilus",
                level: 11,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Nautilus.png",
              },
            },
          ],
          blueTeam: [
            {
              summoner: {
                name: "Akaps",
                position: "TOP",
                lane: "TOP",
              },
              champion: {
                name: "Gnar",
                level: 13,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Gnar.png",
              },
            },
            {
              summoner: {
                name: "사랑 우정 낭만",
                position: "JUNGLE",
                lane: "JUNGLE",
              },
              champion: {
                name: "Mordekaiser",
                level: 11,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Mordekaiser.png",
              },
            },
            {
              summoner: {
                name: "CN Combo lee fan",
                position: "MIDDLE",
                lane: "MIDDLE",
              },
              champion: {
                name: "Irelia",
                level: 15,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Irelia.png",
              },
            },
            {
              summoner: {
                name: "PRS CUSTOM",
                position: "BOTTOM",
                lane: "BOTTOM",
              },
              champion: {
                name: "MissFortune",
                level: 11,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/MissFortune.png",
              },
            },
            {
              summoner: {
                name: "개리릭",
                position: "UTILITY",
                lane: "BOTTOM",
              },
              champion: {
                name: "Taric",
                level: 10,
                imageSrc:
                  "http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/Taric.png",
              },
            },
          ],
        },
      ],
    },
  })
  @ApiResponse({
    status: 404,
    description: "존재하지 않는 소환사",
    schema: {
      example: {
        message: "존재하지 않는 소환사입니다.",
        error: "Not Found",
        statusCode: 404,
      },
    },
  })
  async findManyByName(
    @Param("name") name: string,
    @Query() { start, count }: FindManyByNameDto,
  ): Promise<ApiResponseMatch[]> {
    return this.matchService.findManyByName(name, { start, count });
  }
}
