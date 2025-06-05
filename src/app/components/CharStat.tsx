import React, { useState } from 'react'
import type { CharStatType } from "./types";

const CharStat = ({ charStat, updateCharStat }: { charStat: CharStatType, updateCharStat: Function }) => {

    const calculateCost = (current: number, goal: number) => {
        let cost = 0;
        for (let i = current; i < goal; i++) {
            cost += i ** 2;
        }
        return cost;
    }

    const updateCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCurrent = Number(e.target.value);
        updateCharStat({
            ...charStat, current: newCurrent, cost: calculateCost(newCurrent, charStat.goal)
        })
    }

    const updateGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newGoal = Number(e.target.value);
        updateCharStat({
            ...charStat, goal: newGoal, cost: calculateCost(charStat.current, newGoal)
        })
    }

    return (
        <div className="col-span-4 grid grid-cols-4 gap-30">
            <p className="col-span-1 p-2" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "left", fontFamily: "'Times New Roman', Times, serif" }}>{charStat.name}</p>
            <p className="col-span-1 p-2">
                <input type="text" onChange={updateCurrent} value={charStat.current} className="p-1" style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7" }} size={4} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" onChange={updateGoal} value={charStat.goal} className="p-1" style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7" }} size={4} />
            </p>
            <div className="col-span-1 p-2 flex justify-end gap-1 items-center">
                <p style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>{charStat.cost.toLocaleString()}</p>
                <img src="/assets/gold.gif" style={{ height: 26 }} />
            </div>
        </div>
    )
}

export default CharStat;