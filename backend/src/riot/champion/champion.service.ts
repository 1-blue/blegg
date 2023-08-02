import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom, map } from "rxjs";

import {
  SkillTypeCoords,
  convertToChampionSquareImageURL,
  convertToPassiveSquareImageURL,
  convertToLoadingRectangleImageURL,
  convertToSplashRectangleImageURL,
  convertToSkillSquareImageURL,
  effectRegExp,
  restEffectRegExp,
} from "src/libs";

import type { RiotChampions } from "./model/find-champions";
import type { RiotChampionDetail } from "./model/find-champion-by-name.model";
import type { ApiResponseChampion } from "./interface/champions.interface";
import type { ApiResponseDetailChampion } from "./interface/champion.interface";

@Injectable()
export class ChampionService {
  private readonly httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  /** 2023/07/02 - 모든 챔피언 정보 요청 - by 1-blue */
  async findAll(): Promise<ApiResponseChampion[]> {
    const data = await firstValueFrom<ApiResponseChampion[]>(
      this.httpService
        .get(
          `https://ddragon.leagueoflegends.com/cdn/${process.env.RIOT_VERSION}/data/${process.env.RIOT_LANGUAGE}/champion.json`,
        )
        .pipe(
          map((res) => res.data.data),
          map<RiotChampions, ApiResponseChampion[]>((champions) =>
            Object.values(champions).map((champion) => ({
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

  /** 2023/07/02 - 특정 챔피언 상세 정보 요청 - by 1-blue */
  async findOne(name: string): Promise<ApiResponseDetailChampion> {
    const data = await firstValueFrom<ApiResponseDetailChampion>(
      this.httpService
        .get(
          `https://ddragon.leagueoflegends.com/cdn/${process.env.RIOT_VERSION}/data/${process.env.RIOT_LANGUAGE}/champion/${name}.json`,
        )
        .pipe(
          map((res) => res.data.data[name]),
          map<RiotChampionDetail, RiotChampionDetail>((champion) => ({
            ...champion,
            spells: champion.spells.map((spell) => {
              // "{{ eN }}" 형식 effect로 대체 ( N은 숫자 )
              spell.tooltip = spell.tooltip.replace(
                effectRegExp,
                (target) => spell.effectBurn[target[4]],
              );
              // "{{ * }}" 형식 대체
              spell.tooltip = spell.tooltip.replace(restEffectRegExp, "(?)");

              // 레벨당 사거리
              spell.tooltip += "<br /><br />" + "사거리: " + spell.rangeBurn;
              // 레벨당 소모값
              spell.tooltip += "<br />" + "소모값: " + spell.costBurn;
              // 레벨당 재사용 대기시간
              spell.tooltip +=
                "<br />" + "재사용 대기시간: " + spell.cooldownBurn;

              return spell;
            }),
          })),
          map<RiotChampionDetail, ApiResponseDetailChampion>((champion) => ({
            id: champion.id,
            name: champion.name,
            title: champion.title,
            allytips: champion.allytips,
            enemytips: champion.enemytips,
            stats: champion.stats,
            info: champion.info,
            skins: champion.skins.map(({ id, name, num }) => ({
              id,
              name: name === "default" ? "기본 스킨" : name,
              src: convertToLoadingRectangleImageURL(champion.id + "_" + num),
            })),
            splashs: champion.skins.map(({ id, name, num }) => ({
              id,
              name: name === "default" ? "기본 스킨" : name,
              src: convertToSplashRectangleImageURL(champion.id + "_" + num),
            })),
            skills: [
              {
                type: "P",
                src: convertToPassiveSquareImageURL(
                  champion.passive.image.full,
                ),
                alt: `${champion.passive.name} ( ${champion.name} 패시브 )`,
                title: champion.passive.name,
                description: champion.passive.description,
              },
              ...champion.spells.map((spell, i) => ({
                type: SkillTypeCoords[i],
                src: convertToSkillSquareImageURL(spell.image.full),
                alt: `${spell.name} ( ${champion.name} ${SkillTypeCoords[i]} 스킬 )`,
                title: spell.name,
                description: spell.tooltip,
              })),
            ],
          })),
        ),
    );

    return data;
  }
}
