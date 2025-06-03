'use client';
import React, { useMemo, useState } from 'react'
import CharStat from './CharStat';
import HorseStat from './HorseStat';
import type { HorseStatType, CharStatType, StatName } from "./types";

const StatsCalculator = () => {
    const [charStats, setCharStats] = useState([{
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
    const [horseStats, setHorseStats] = useState([{
        name: "Attack",
        default: 1,
        current: 1,
        goal: 1,
        cost: 0
    },
    {
        name: "Defence",
        default: 1,
        current: 1,
        goal: 1,
        cost: 0
    },
    {
        name: "Stamina",
        default: 1,
        current: 1,
        goal: 1,
        cost: 0
    }]);

    const charTotalCost = useMemo(() => {
        return charStats.reduce((sum, s) => sum + s.cost, 0);
    }, [charStats]);

    const horseTotalCost = useMemo(() => {
        return horseStats.reduce((sum, s) => sum + s.cost, 0);
    }, [horseStats]);

    const updateCharStat = (newCharStat: CharStatType) => {
        setCharStats(prevCharStats => prevCharStats.map(charStat => charStat.name === newCharStat.name ? newCharStat : charStat))
    }

    const updateHorseStat = (newHorseStat: HorseStatType) => {
        setHorseStats(prevHorseStats => prevHorseStats.map(horseStat => horseStat.name === newHorseStat.name ? newHorseStat : horseStat))
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
                {charStats.map(charStat => (
                    <CharStat charStat={charStat} updateCharStat={updateCharStat} key={charStat.name} />
                ))}

                <div className="col-span-4">
                    <div className="col-span-4 grid grid-cols-4 gap-30 bg-gray-100">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 ml-auto">Total: </p>
                        <p className="col-span-1 p-2">{charTotalCost}</p>
                    </div>
                </div>
            </div>
            <div className="grid gap-2 my-20">
                <div className="col-span-5">
                    <div className="col-span-5 grid grid-cols-5 gap-30 bg-gray-400">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2">Default</p>
                        <p className="col-span-1 p-2">Current</p>
                        <p className="col-span-1 p-2">Goal</p>
                        <p className="col-span-1 p-2">Cost</p>
                    </div>
                </div>
                <div className="col-span-5">
                    {horseStats.map(horseStat => (
                        <HorseStat horseStat={horseStat} updateHorseStat={updateHorseStat} key={horseStat.name} />
                    ))}
                </div>
                <div className="col-span-5">
                    <div className="col-span-5 grid grid-cols-5 gap-30 bg-gray-100">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 ml-auto">Total: </p>
                        <p className="col-span-1 p-2">{horseTotalCost}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StatsCalculator