"use client";

import { formatDate } from "@/utils";
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date())
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        setFormattedDate(formatDate(new Date()));

        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative text-white text-sm font-semibold text-start p-1 rounded-md z-10">
            <div>{time.toLocaleTimeString()}</div>
            <div className="text-white">{formattedDate}</div>
        </div>
    );
}
