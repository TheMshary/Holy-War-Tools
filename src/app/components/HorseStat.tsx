import React, { useState } from 'react'
import type { HorseStatType, StatName } from "./types";

const HorseStat = ({ horseStat, updateHorseStat }: { horseStat: HorseStatType, updateHorseStat: Function }) => {

    const calculateCost = (horseStat: HorseStatType) => {
        const { current, goal } = horseStat;
        if (goal <= current || current <= horseStat.default) return 0;

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
        const newGoal = Number(e.target.value);
        const cost = calculateCost({ ...horseStat, goal: newGoal });
        updateHorseStat({
            ...horseStat, goal: newGoal, cost
        })
    }

    return (
        <div className="col-span-5 grid grid-cols-5 gap-30 bg-gray-100">
            <p className="col-span-1 p-2">{horseStat.name}</p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateDefault} value={horseStat.default} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateCurrent} value={horseStat.current} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateGoal} value={horseStat.goal} />
            </p>
            <p className="col-span-1 p-2">{horseStat.cost}</p>
        </div>
    )
}

export default HorseStat;