import React, { useState } from 'react'
import { ElixirType } from "./types";

const Elixir = ({ elixir, updateElixir }: { elixir: ElixirType, updateElixir: Function }) => {
    const calculateRevenue = (quantity: number, price: number) => {
        return quantity * price * 0.9;
    }

    const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        updateElixir({
            ...elixir, quantity: newQuantity, revenue: calculateRevenue(newQuantity, elixir.price)
        })
    }

    const updatePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPrice = Number(e.target.value);
        updateElixir({
            ...elixir, price: newPrice, revenue: calculateRevenue(elixir.quantity, newPrice)
        })
    }

    return (
        <div className="col-span-4 grid grid-cols-4 gap-30 flex items-center" style={{ width: "92%", margin: "auto" }}>
            <p className="col-span-1" style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "left", fontFamily: "'Times New Roman', Times, serif", textWrap: "nowrap" }}>{elixir.name}</p>
            <p className="col-span-1">
                <input type="text" onChange={updateQuantity} value={elixir.quantity} style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7", fontSize: "14px" }} className="px-1" size={4} />
            </p>
            <p className="col-span-1">
                <input type="text" onChange={updatePrice} value={elixir.price} style={{ backgroundColor: "#322e29", borderColor: "#7a6d68", borderWidth: "1px", color: "#fef1d7", fontSize: "14px" }} className="px-1" size={4} />
            </p>
            <div className="col-span-1 flex justify-end gap-1 items-center">
                <p style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>{elixir.revenue.toLocaleString()}</p>
                <img src="/assets/gold.gif" style={{ height: 26 }} />
            </div>
        </div>
    )
}

export default Elixir;