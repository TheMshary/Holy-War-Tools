export type StatName = "Strength" | "Attack" | "Defence" | "Agility" | "Stamina"

export type CharStatType = {
    name: string,
    current: number,
    goal: number,
    cost: number,
}

export type HorseStatType = {
    name: string,
    default: number,
    current: number,
    goal: number,
    cost: number,
}