import React, { useState } from 'react'

const Stat = ({ statName, updateCost }: { statName: string, updateCost: Object }) => {
    console.log(statName);
    const [stat, setStat] = useState({ current: 1, goal: 1, cost: 0 })

    const getStatCost = () => {
        console.log("meow")
        if (stat.goal <= stat.current) return 0;
        let cost = 0;
        for (let i = stat.current; i < stat.goal; i++) {
            cost += i ** 2;
        }
        return cost;
    }

    const updateCurrent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStat({ ...stat, current: Number(e.target.value) })
    }

    const updateGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStat({ ...stat, goal: Number(e.target.value) })
    }

    return (
        <div className="col-span-4 grid grid-cols-4 gap-30 bg-gray-100">
            <p className="col-span-1 p-2">{statName}</p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateCurrent} value={stat.current} />
            </p>
            <p className="col-span-1 p-2">
                <input type="text" className="bg-white rounded" onChange={updateGoal} value={stat.goal} />
            </p>
            <p className="col-span-1 p-2">{getStatCost()}</p>
        </div>
    )
}

export default Stat;