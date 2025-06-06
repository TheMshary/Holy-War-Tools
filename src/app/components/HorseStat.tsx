import React, { useState } from 'react'
import type { HorseStatType } from "./types";

const HorseStat = ({ horseStat, updateHorseStat }: { horseStat: HorseStatType, updateHorseStat: Function }) => {

    const calculateCost = (horseStat: HorseStatType) => {
        const { current, goal } = horseStat;
        if (goal <= current || current < horseStat.default) return 0;

        const costCurrent = horseStat.current - horseStat.default + 1;
        const costGoal = horseStat.goal - horseStat.default + 1;
        let cost = 0;
        for (let i = costCurrent; i < costGoal; i++) {
            cost += i ** 2;
        }
        return cost;
    }

    const updateDefault = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newDefault = Number(e.target.value);
        const cost = calculateCost({ ...horseStat, default: newDefault });
        updateHorseStat({
            ...horseStat, default: newDefault, cost
        })
    }

    const updateCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCurrent = Number(e.target.value);
        const cost = calculateCost({ ...horseStat, current: newCurrent });
        updateHorseStat({
            ...horseStat, current: newCurrent, cost
        })
    }

    const updateGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("updating goal")
        const newGoal = Number(e.target.value);
        console.log("newGoal" + newGoal);
        const cost = calculateCost({ ...horseStat, goal: newGoal });
        console.log("cost" + cost);
        updateHorseStat({
            ...horseStat, goal: newGoal, cost
        })
    }

    return (
        <div className="col-span-5 grid grid-cols-5 gap-30 ">
            <p className="col-span-1 p-2" style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "left", fontFamily: "'Times New Roman', Times, serif" }}>{horseStat.name}</p>
            <p className="col-span-1 p-2">
                <input type="text" onChange={updateDefault} value={horseStat.default} className="p-1" style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7" }} size={4} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" onChange={updateCurrent} value={horseStat.current} className="p-1" style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7" }} size={4} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" onChange={updateGoal} value={horseStat.goal} className="p-1" style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7" }} size={4} />
            </p>
            <div className="col-span-1 p-2 flex justify-end gap-1 items-center">
                <p style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>{horseStat.cost.toLocaleString()}</p>
                <img src="/assets/gold.gif" style={{ height: 26 }} />
            </div>
        </div>
    )
}

export default HorseStat;