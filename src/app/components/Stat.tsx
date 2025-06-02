import React, { useState } from 'react'
import type { StatType, StatName } from "./types";

const Stat = ({ stat, updateStat }: { stat: StatType, updateStat: Function }) => {

    const calculateCost = (current: number, goal: number) => {
        let cost = 0;
        for (let i = current; i < goal; i++) {
            cost += i ** 2;
        }
        return cost;
    }

    const updateCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newCurrent = Number(e.target.value);
        updateStat({
            ...stat, current: newCurrent, cost: calculateCost(newCurrent, stat.goal)
        })
    }

    const updateGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newGoal = Number(e.target.value);
        updateStat({
            ...stat, goal: newGoal, cost: calculateCost(stat.current, newGoal)
        })
    }

    return (
        <div className="col-span-4 grid grid-cols-4 gap-30 bg-gray-100">
            <p className="col-span-1 p-2">{stat.name}</p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateCurrent} value={stat.current} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateGoal} value={stat.goal} />
            </p>
            <p className="col-span-1 p-2">{stat.cost}</p>
        </div>
    )
}

export default Stat;