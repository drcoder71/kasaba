'use client'
import { VideoNewsType } from "@/types";
import { formatDate } from "@/utils";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";

const VideoNewsCard = memo(({
    data: { title, time, id, thumbnails },
}: {
    data: VideoNewsType;
}) => {
    const [date, setDate] = useState("")

    useEffect(() => {
        setDate(formatDate(time))
    }, [id])

    return (
        <div className="flex items-center justify-start gap-3 group">
            <div className="relative w-32 h-20">
                <Image src={`${thumbnails}`} width={132} height={78} className=" object-cover min-w-32 h-20" alt="photo" loading="lazy" />
                <div className=" absolute w-full h-full flex items-center justify-center top-0 left-0 bg-gray-800/50">
                    <Play className=" w-6 h-6 text-white" />
                </div>
            </div>
            <div>
                <p className=" text-start font-raleway font-medium text-sm text-[#e7e7e7] duration-200 ">
                    {date}
                </p>
                <Link className="text-start font-raleway font-bold text-base text-white duration-200 group-hover:text-orange-500" href={`/news/video/${id}`}>
                    {title}
                </Link>
            </div>
        </div>
    );
}
)
export default VideoNewsCard;
