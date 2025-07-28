'use client';
import React, { useEffect, useMemo, useState } from 'react'
import InnerHead from "../../assets/images/innerhead_0_0.jpg";
import Cont_Zero from "../../assets/images/cont_0_original.jpg";
import Image from "next/image";

import Elixir from "./Elixir";
import { Elixirs, ElixirType } from "./types";

const defaultElixirs: Elixirs = [{
    name: "Consecrated Elixir",
    quantity: 0,
    price: 0,
    revenue: 0,
}, {
    name: "Baptised Elixir",
    quantity: 0,
    price: 0,
    revenue: 0,
}, {
    name: "Blessed Elixir",
    quantity: 0,
    price: 0,
    revenue: 0,
}, {
    name: "Holy Beverage",
    quantity: 0,
    price: 0,
    revenue: 0,
}, {
    name: "Sanctified Spirit",
    quantity: 0,
    price: 0,
    revenue: 0,
}, {
    name: "Divine Brew",
    quantity: 0,
    price: 0,
    revenue: 0,
}]

const ElixirsCalculator = () => {
    const [elixirs, setElixirs] = useState(defaultElixirs);

    useEffect(() => {
        try {
            const storedElixirs = localStorage.getItem("elixirs");
            if (storedElixirs !== null) setElixirs(JSON.parse(storedElixirs));
        } catch (err) {
            console.warn("Failed to parse elixirs from localStorage", err);
            setElixirs(defaultElixirs);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("elixirs", JSON.stringify(elixirs));
    }, [elixirs]);

    const elixirsTotalRevenue = useMemo(() => {
        return elixirs.reduce((sum, s) => sum + s.revenue, 0);
    }, [elixirs]);

    const updateElixir = (newElixir: ElixirType) => {
        setElixirs(prevElixirs => [...prevElixirs.map(elixir => elixir.name === newElixir.name ? newElixir : elixir)] as Elixirs)
    }

    return (
        <div className="w-auto max-w-fit mx-auto" style={{ width: 712 }}>
            <div className="grid">
                <div className="col-span-4 mt-10">
                    <img src="/assets/foot_0_flipped.jpg" />
                </div>
                <div className="col-span-4 flex justify-center items-center" style={{ backgroundImage: `url(${Cont_Zero.src})`, width: 712 }}>
                    <p style={{ color: "#ffeaaf", fontSize: "18px", textAlign: "center", fontWeight: "bold", fontFamily: "'Times New Roman', Times, serif" }}>Elixirs Calculator</p>
                </div>
                <div className="col-span-4 flex justify-center items-center" style={{ backgroundImage: `url(${InnerHead.src})`, height: 51, width: 712 }}>
                    <p style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}></p>
                </div>
                <div style={{ backgroundImage: `url(${Cont_Zero.src})`, width: 712 }}>
                    <div className="col-span-4 my-1">
                        <div className="col-span-4 grid grid-cols-4 gap-30 flex items-center" style={{ width: "92%", margin: "auto" }}>
                            <p className="col-span-1" style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}></p>
                            <p className="col-span-1" style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Price</p>
                            <p className="col-span-1" style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Quantity</p>
                            <p className="col-span-1 " style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>Revenue</p>
                        </div>
                    </div>
                    <div className="col-span-4" style={{ paddingRight: "8px", paddingLeft: "8px" }}>
                        {elixirs.map(elixir => (
                            <div key={elixir.name}>
                                <Elixir elixir={elixir} updateElixir={updateElixir} />
                                {elixir.name != "Divine Brew" && <Image src="/assets/trennlinie.jpg" width={682} height={13} alt="divider" className="mx-auto" />}
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div >
            <div className="grid">
                <div style={{ backgroundImage: `url(${Cont_Zero.src})`, width: 712 }}>
                    <div className="col-span-5 flex justify-center items-center" style={{ backgroundImage: `url(${InnerHead.src})`, height: 51, width: 712 }}>
                        <p style={{ color: "#ffeaaf", fontSize: "14px", textAlign: "center", fontFamily: "'Times New Roman', Times, serif" }}>
                            Total: {elixirsTotalRevenue.toLocaleString()}
                        </p>
                        <img src="/assets/gold.gif" style={{ height: 26 }} />
                    </div>
                    <div className="col-span-5">
                        <img src="/assets/foot_0.jpg" />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default ElixirsCalculator;