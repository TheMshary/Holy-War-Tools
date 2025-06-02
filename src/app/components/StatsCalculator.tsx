'use client';
import React, { useMemo, useState } from 'react'
import Stat from './Stat';
import type { StatType, StatName } from "./types";

const StatsCalculator = () => {
    const [stats, setStats] = useState([{
        name: "Strength",
        current: 1,
        goal: 1,
        cost: 0
    },
    {
        name: "Attack",
        current: 1,
        goal: 1,
        cost: 0
    },
    {
        name: "Defence",
        current: 1,
        goal: 1,
        cost: 0
    },
    {
        name: "Agility",
        current: 1,
        goal: 1,
        cost: 0
    },
    {
        name: "Stamina",
        current: 1,
        goal: 1,
        cost: 0
    }]);
    console.log("NEW STATS");
    console.log(stats)

    const totalCost = useMemo(() => {
        console.log("CALCULATING TOTAL FROM STATS")
        console.log(stats)
        return stats.reduce((sum, s) => sum + s.cost, 0);
    }, [stats]);

    const updateStat = (newStat: StatType) => {
        console.log("OLD STATS")
        console.log(stats)
        console.log("UPDATING TO THIS STAT")
        console.log(newStat);
        setStats(prevStats => prevStats.map(stat => stat.name === newStat.name ? newStat : stat))
    }

    return (
        <div className="w-auto max-w-fit mx-auto">
            <div className="grid grid-rows-7 gap-2">
                <div className="col-span-4 grid grid-cols-4 gap-30 bg-gray-400">
                    <p className="col-span-1 p-2"></p>
                    <p className="col-span-1 p-2">Current</p>
                    <p className="col-span-1 p-2">Goal</p>
                    <p className="col-span-1 p-2">Cost</p>
                </div>
                {stats.map(stat => (
                    <div className="col-span-4">
                        <Stat stat={stat} updateStat={updateStat} />
                    </div>
                ))}

                <div className="col-span-4">
                    <div className="col-span-4 grid grid-cols-4 gap-30 bg-gray-100">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 ml-auto">Total: </p>
                        <p className="col-span-1 p-2">{totalCost}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StatsCalculator