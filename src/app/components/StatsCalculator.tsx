'use client';
import React, { useEffect, useMemo, useState } from 'react'
import Image from "next/image";
import CharStat from './CharStat';
import HorseStat from './HorseStat';
import type { HorseStatType, CharStatType, CharStats, HorseStats } from "./types";

const defaultCharStats: CharStats = [{
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
}]
const defaultHorseStats: HorseStats = [{
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
}]

const StatsCalculator = () => {
    const [charStats, setCharStats] = useState<CharStats>(defaultCharStats);
    const [horseStats, setHorseStats] = useState<HorseStats>(defaultHorseStats);

    useEffect(() => {
        try {
            const storedCharStats = localStorage.getItem("charStats");
            if (storedCharStats !== null) setCharStats(JSON.parse(storedCharStats));
        } catch (err) {
            console.warn("Failed to parse charStats from localStorage", err);
            setCharStats(defaultCharStats);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("charStats", JSON.stringify(charStats));
    }, [charStats]);

    useEffect(() => {
        try {
            const storedHorseStats = localStorage.getItem("horseStats");
            if (storedHorseStats !== null) setHorseStats(JSON.parse(storedHorseStats));
        } catch (err) {
            console.warn("Failed to parse horseStats from localStorage", err);
            setHorseStats(defaultHorseStats);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("horseStats", JSON.stringify(horseStats));
    }, [horseStats]);

    const charTotalCost = useMemo(() => {
        return charStats.reduce((sum, s) => sum + s.cost, 0);
    }, [charStats]);

    const horseTotalCost = useMemo(() => {
        return horseStats.reduce((sum, s) => sum + s.cost, 0);
    }, [horseStats]);

    const totalCost = useMemo(() => {
        return charTotalCost + horseTotalCost;
    }, [charStats, horseStats]);

    const updateCharStat = (newCharStat: CharStatType) => {
        setCharStats(prevCharStats => [...prevCharStats.map(charStat => charStat.name === newCharStat.name ? newCharStat : charStat)] as CharStats)
    }

    const updateHorseStat = (newHorseStat: HorseStatType) => {
        setHorseStats(prevHorseStats => prevHorseStats.map(horseStat => horseStat.name === newHorseStat.name ? newHorseStat : horseStat) as HorseStats)
    }

    return (
        <div className="w-auto max-w-fit mx-auto">
            <div className="grid gap-2">
                <div className="col-span-4">
                    <p style={{ color: "#ffeaaf", fontSize: "24px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Character Attributes</p>
                </div>
                <div className="col-span-4">
                    <div className="col-span-4 grid grid-cols-4 gap-30">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 mr-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Current</p>
                        <p className="col-span-1 p-2 mr-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Goal</p>
                        <p className="col-span-1 p-2" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Cost</p>
                    </div>
                </div>
                <div className="col-span-4">
                    {charStats.map(charStat => (
                        <div key={charStat.name}>
                            <CharStat charStat={charStat} updateCharStat={updateCharStat} />
                            {charStat.name != "Stamina" && <Image src="/assets/trennlinie.jpg" width="682" height="13" alt="divider" className="mx-auto" />}
                        </div>
                    ))}
                </div>

                <div className="col-span-4">
                    <div className="col-span-4 grid grid-cols-4 gap-30">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 ml-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Character Total: </p>
                        <p className="col-span-1 p-2" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>{charTotalCost.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div className="grid gap-2 my-20">
                <div className="col-span-5">
                    <p style={{ color: "#ffeaaf", fontSize: "24px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Horse Attributes</p>
                </div>
                <div className="col-span-5">
                    <div className="col-span-5 grid grid-cols-5 gap-30">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 mr-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Default</p>
                        <p className="col-span-1 p-2 mr-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Current</p>
                        <p className="col-span-1 p-2 mr-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Goal</p>
                        <p className="col-span-1 p-2" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Cost</p>
                    </div>
                </div>
                <div className="col-span-5">
                    {horseStats.map(horseStat => (
                        <div key={horseStat.name}>
                            <HorseStat horseStat={horseStat} updateHorseStat={updateHorseStat} />
                            {horseStat.name != "Stamina" && <Image src="/assets/trennlinie.jpg" width="682" height="13" alt="divider" className="mx-auto" />}
                        </div>
                    ))}
                </div>
                <div className="col-span-5">
                    <div className="col-span-5 grid grid-cols-5 gap-30">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 ml-auto" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Horse Total: </p>
                        <p className="col-span-1 p-2" style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>{horseTotalCost.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <p style={{ color: "#ffeaaf", fontSize: "20px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>
                Total: {totalCost.toLocaleString()}
            </p>
        </div >
    )
}

export default StatsCalculator