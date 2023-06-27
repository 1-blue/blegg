export interface RiotImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface RiotSkin {
  id: string;
  num: number;
  name: string;
  chromas: boolean;
}
export type RiotTag =
  | "Fighter"
  | "Tank"
  | "Mage"
  | "Assassin"
  | "Marksman"
  | "Support";
export interface RiotInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}
export interface RiotStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}
export interface RiotSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  leveltip: {
    label: string;
    effect: string[];
  };
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  effect: (number | null)[][];
  effectBurn: (number | null)[];
  // vars: [];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: RiotImage;
  resource: string;
}
export interface RiotPassive {
  name: string;
  description: string;
  image: RiotImage;
}
export type RiotChampionName =
  | "Aatrox"
  | "Ahri"
  | "Akali"
  | "Akshan"
  | "Alistar"
  | "Amumu"
  | "Anivia"
  | "Annie"
  | "Aphelios"
  | "Ashe"
  | "AurelionSol"
  | "Azir"
  | "Bard"
  | "Belveth"
  | "Blitzcrank"
  | "Brand"
  | "Braum"
  | "Caitlyn"
  | "Camille"
  | "Cassiopeia"
  | "Chogath"
  | "Corki"
  | "Darius"
  | "Diana"
  | "Draven"
  | "DrMundo"
  | "Ekko"
  | "Elise"
  | "Evelynn"
  | "Ezreal"
  | "Fiddlesticks"
  | "Fiora"
  | "Fizz"
  | "Galio"
  | "Gangplank"
  | "Garen"
  | "Gnar"
  | "Gragas"
  | "Graves"
  | "Gwen"
  | "Hecarim"
  | "Heimerdinger"
  | "Illaoi"
  | "Irelia"
  | "Ivern"
  | "Janna"
  | "JarvanIV"
  | "Jax"
  | "Jayce"
  | "Jhin"
  | "Jinx"
  | "Kaisa"
  | "Kalista"
  | "Karma"
  | "Karthus"
  | "Kassadin"
  | "Katarina"
  | "Kayle"
  | "Kayn"
  | "Kennen"
  | "Khazix"
  | "Kindred"
  | "Kled"
  | "KogMaw"
  | "KSante"
  | "Leblanc"
  | "LeeSin"
  | "Leona"
  | "Lillia"
  | "Lissandra"
  | "Lucian"
  | "Lulu"
  | "Lux"
  | "Malphite"
  | "Malzahar"
  | "Maokai"
  | "MasterYi"
  | "Milio"
  | "MissFortune"
  | "MonkeyKing"
  | "Mordekaiser"
  | "Morgana"
  | "Nami"
  | "Nasus"
  | "Nautilus"
  | "Neeko"
  | "Nidalee"
  | "Nilah"
  | "Nocturne"
  | "Nunu"
  | "Olaf"
  | "Orianna"
  | "Ornn"
  | "Pantheon"
  | "Poppy"
  | "Pyke"
  | "Qiyana"
  | "Quinn"
  | "Rakan"
  | "Rammus"
  | "RekSai"
  | "Rell"
  | "Renata"
  | "Renekton"
  | "Rengar"
  | "Riven"
  | "Rumble"
  | "Ryze"
  | "Samira"
  | "Sejuani"
  | "Senna"
  | "Seraphine"
  | "Sett"
  | "Shaco"
  | "Shen"
  | "Shyvana"
  | "Singed"
  | "Sion"
  | "Sivir"
  | "Skarner"
  | "Sona"
  | "Soraka"
  | "Swain"
  | "Sylas"
  | "Syndra"
  | "TahmKench"
  | "Taliyah"
  | "Talon"
  | "Taric"
  | "Teemo"
  | "Thresh"
  | "Tristana"
  | "Trundle"
  | "Tryndamere"
  | "TwistedFate"
  | "Twitch"
  | "Udyr"
  | "Urgot"
  | "Varus"
  | "Vayne"
  | "Veigar"
  | "Velkoz"
  | "Vex"
  | "Vi"
  | "Viego"
  | "Viktor"
  | "Vladimir"
  | "Volibear"
  | "Warwick"
  | "Xayah"
  | "Xerath"
  | "XinZhao"
  | "Yasuo"
  | "Yone"
  | "Yorick"
  | "Yuumi"
  | "Zac"
  | "Zed"
  | "Zeri"
  | "Ziggs"
  | "Zilean"
  | "Zoe"
  | "Zyra";
