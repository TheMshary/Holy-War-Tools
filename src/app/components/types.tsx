export type CharStatName = "Strength" | "Attack" | "Defence" | "Agility" | "Stamina";

export type CharStatType = {
    name: CharStatName,
    current: number,
    goal: number,
    cost: number,
}

export type CharStats = [CharStatType, CharStatType, CharStatType, CharStatType, CharStatType];

export type HorseStatName = "Attack" | "Defence" | "Stamina";

export type HorseStatType = {
    name: HorseStatName,
    default: number,
    current: number,
    goal: number,
    cost: number,
}

export type HorseStats = [HorseStatType, HorseStatType, HorseStatType];
