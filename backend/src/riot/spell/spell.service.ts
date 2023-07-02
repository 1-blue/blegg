import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";

import { LANGUAGE, VERSION, convertToSpellImageURL } from "src/libs";

import type { ApiResponseSpell } from "./interface/spell.interface";
import type { RiotSpell } from "./model/spell.model";

@Injectable()
export class SpellService {
  private readonly httpService: HttpService;
  constructor(httpService: HttpService) {
    this.httpService = httpService;
  }

  /** 2023/06/30 - 특정 스펠 찾기 - by 1-blue */
  async findOne(key: string): Promise<ApiResponseSpell> {
    const spells = await this.findAll();

    const spell = spells.find((spell) => spell.key === key);

    if (!spell) {
      throw new NotFoundException("존재하지 않는 스펠입니다.");
    }

    return spell;
  }

  /** 2023/06/30 - 모든 스펠 찾기 - by 1-blue */
  async findAll(): Promise<ApiResponseSpell[]> {
    try {
      const spells = await firstValueFrom<ApiResponseSpell[]>(
        this.httpService
          .get(
            `https://ddragon.leagueoflegends.com/cdn/${VERSION}/data/${LANGUAGE}/summoner.json`,
          )
          .pipe(map((res) => res.data))
          .pipe(
            map<RiotSpell, ApiResponseSpell[]>((spells) =>
              Object.values(spells.data).map((spell) => ({
                id: spell.id,
                name: spell.name,
                description:
                  spell.description +
                  "\n\n" +
                  `사거리: ${spell.rangeBurn}` +
                  "\n" +
                  `쿨타임: ${spell.cooldownBurn}초`,
                imageSrc: convertToSpellImageURL(spell.id),
                key: spell.key,
              })),
            ),
          ),
      );

      return spells;
    } catch (error) {}
  }
}
