import { RiotImage } from "src/types";

export interface RiotItems {
  type: string;
  version: string;
  /** ? */
  basic: RiotBasic;
  /** 아이템들 정보 */
  data: {
    [itemId: string]: RiotItem;
  };
  /** ? */
  groups: RiotGroup[];
  /** ? */
  tree: RiotTree[];
}

interface RiotBasic {
  name: string;
  rune: {
    isrune: boolean;
    tier: number;
    type: string;
  };
  gold: {
    base: number;
    total: number;
    sell: number;
    purchasable: boolean;
  };
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: [];
  into: [];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: {
    FlatHPPoolMod: number;
    rFlatHPModPerLevel: number;
    FlatMPPoolMod: number;
    rFlatMPModPerLevel: number;
    PercentHPPoolMod: number;
    PercentMPPoolMod: number;
    FlatHPRegenMod: number;
    rFlatHPRegenModPerLevel: number;
    PercentHPRegenMod: number;
    FlatMPRegenMod: number;
    rFlatMPRegenModPerLevel: number;
    PercentMPRegenMod: number;
    FlatArmorMod: number;
    rFlatArmorModPerLevel: number;
    PercentArmorMod: number;
    rFlatArmorPenetrationMod: number;
    rFlatArmorPenetrationModPerLevel: number;
    rPercentArmorPenetrationMod: number;
    rPercentArmorPenetrationModPerLevel: number;
    FlatPhysicalDamageMod: number;
    rFlatPhysicalDamageModPerLevel: number;
    PercentPhysicalDamageMod: number;
    FlatMagicDamageMod: number;
    rFlatMagicDamageModPerLevel: number;
    PercentMagicDamageMod: number;
    FlatMovementSpeedMod: number;
    rFlatMovementSpeedModPerLevel: number;
    PercentMovementSpeedMod: number;
    rPercentMovementSpeedModPerLevel: number;
    FlatAttackSpeedMod: number;
    PercentAttackSpeedMod: number;
    rPercentAttackSpeedModPerLevel: number;
    rFlatDodgeMod: number;
    rFlatDodgeModPerLevel: number;
    PercentDodgeMod: number;
    FlatCritChanceMod: number;
    rFlatCritChanceModPerLevel: number;
    PercentCritChanceMod: number;
    FlatCritDamageMod: number;
    rFlatCritDamageModPerLevel: number;
    PercentCritDamageMod: number;
    FlatBlockMod: number;
    PercentBlockMod: number;
    FlatSpellBlockMod: number;
    rFlatSpellBlockModPerLevel: number;
    PercentSpellBlockMod: number;
    FlatEXPBonus: number;
    PercentEXPBonus: number;
    rPercentCooldownMod: number;
    rPercentCooldownModPerLevel: number;
    rFlatTimeDeadMod: number;
    rFlatTimeDeadModPerLevel: number;
    rPercentTimeDeadMod: number;
    rPercentTimeDeadModPerLevel: number;
    rFlatGoldPer10Mod: number;
    rFlatMagicPenetrationMod: number;
    rFlatMagicPenetrationModPerLevel: number;
    rPercentMagicPenetrationMod: number;
    rPercentMagicPenetrationModPerLevel: number;
    FlatEnergyRegenMod: number;
    rFlatEnergyRegenModPerLevel: number;
    FlatEnergyPoolMod: number;
    rFlatEnergyModPerLevel: number;
    PercentLifeStealMod: number;
    PercentSpellVampMod: number;
  };
  tags: [];
  maps: {
    "1": boolean;
    "8": boolean;
    "10": boolean;
    "12": boolean;
  };
}
interface RiotItem {
  /** 이름 */
  name: string;
  /** 구체적인 설명 */
  description: string;
  /** 별칭 */
  colloq: string;
  /** 간단한 설명 */
  plaintext: "이동 속도가 약간 증가합니다.";
  /** 상위 아이템 ID */
  into: string[];
  /** 이미지 */
  image: RiotImage;
  /** 가격에 대한 정보 */
  gold: RiotGold;
  /** 카테고리 */
  tags: string[];
  /** ? */
  maps: {
    "11": boolean;
    "12": boolean;
    "21": boolean;
    "22": boolean;
  };
  /** 효과 TODO: 번역 테이블 만들기.. */
  stats: {
    [name: string]: number;
  };
}
/** 가격에 대한 정보 타입 */
interface RiotGold {
  /** 기본 가격 */
  base: number;
  /** 구매 가능 여부 ? */
  purchasable: boolean;
  /** 총 가격 */
  total: number;
  /** 판매 가격 */
  sell: number;
}
interface RiotGroup {
  id: string;
  [name: string]: string;
}
interface RiotTree {
  header: string;
  tags: string[];
}
