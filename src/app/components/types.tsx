export type StatName = "Strength" | "Attack" | "Defence" | "Agility" | "Stamina"

export type StatType = {
    name: string
    current: number
    goal: number,
    cost: number
}