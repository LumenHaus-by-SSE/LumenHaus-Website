import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

const Topbar = () => {
    return (
        <div className="hidden w-full p-10 bg-[#1d1d1d] text-white lg:flex items-center justify-center">
            <div className="w-3/5 flex items-center justify-between">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex gap-2 items-center justify-center"><IoLocationSharp className="text-2xl text-[#e4bb7d]"/> <h1 className="text-sm">123th RoundStreet, Pekanbaru</h1></div>
                    <div className="flex gap-2 items-center justify-center"><IoCall className="text-2xl text-[#e4bb7d]"/> <h1 className="text-sm">000 123 456 789</h1></div>
                </div>
                <div>
                    <div className="flex gap-2 items-center justify-center"><FaClock className="text-2xl text-[#e4bb7d]"/> <h1 className="text-sm">Opening: Mon-Fri 08:00 - 17:00</h1></div>
                </div>
            </div>
        </div>
    )
}
export default Topbar
