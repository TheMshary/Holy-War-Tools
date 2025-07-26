export type ElixirName = "Consecrated Elixir" | "Baptised Elixir" | "Blessed Elixir" | "Holy Beverage" | "Sanctified Spirit" | "Divine Brew";

export type ElixirType = {
    name: ElixirName,
    quantity: number,
    price: number,
    revenue: number,
}

export type Elixirs = [ElixirType, ElixirType, ElixirType, ElixirType, ElixirType, ElixirType];

