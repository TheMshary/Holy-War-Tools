'use client';
import React, { useState } from 'react'
import Stat from './Stat';

const StatsCalculator = () => {
    const [costs, setCosts] = useState({ strength: 0, attack: 0, defence: 0, agility: 0, stamina: 0 });

    const updateCost = (newCost: Object) => {
        setCosts({ ...costs, ...newCost })
    }

    const getTotalCost = () => {
        return Object.values(costs).reduce((sum, val) => sum + val, 0);
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
                <div className="col-span-4">
                    <Stat statName="Strength" updateCost={updateCost} />
                </div>
                <div className="col-span-4">
                    <Stat statName="Attack" updateCost={updateCost} />
                </div>
                <div className="col-span-4">
                    <Stat statName="Defence" updateCost={updateCost} />
                </div>
                <div className="col-span-4">
                    <Stat statName="Agility" updateCost={updateCost} />
                </div>
                <div className="col-span-4">
                    <Stat statName="Stamina" updateCost={updateCost} />
                </div>
                <div className="col-span-4">
                    <div className="col-span-4 grid grid-cols-4 gap-30 bg-gray-100">
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2"></p>
                        <p className="col-span-1 p-2 ml-auto">Total: </p>
                        <p className="col-span-1 p-2">{getTotalCost()}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default StatsCalculator