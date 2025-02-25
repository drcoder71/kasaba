import { PhotoNewsType, VideoNewsType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoNewsVariants = (variant: string) => {
    switch (variant) {
        case "standard":
            return {
                card: "w-full relative h-[361px]",
                p: "py-1 px-6 rounded bg-white/15 font-raleway font-medium text-sm text-white",
                link: "font-montserrat font-semibold text-xl text-white hover:text-orange-500 duration-200 ",
                blurBox:
                    "w-full flex flex-col items-start justify-center gap-4 relative p-5"
            };
        case "small":
            return {
                card: "w-full relative h-[225px]",
                p: "py-1 px-6 rounded bg-white/15 font-raleway font-medium text-[10px] text-white",
                link: "font-montserrat font-semibold text-xs text-white hover:text-orange-500 duration-200 ",
                blurBox:
                    "w-full flex flex-col items-start justify-center gap-y-2 relative py-3 px-6"
            };
        default:
            return {
                card: "w-full relative h-[361px]",
                p: "py-1 px-6 rounded bg-white/15 font-raleway font-medium text-sm text-white",
                link: "font-montserrat font-semibold text-xl text-white hover:text-orange-500 duration-200 ",
                blurBox:
                    "w-full flex flex-col items-start justify-center gap-4 relative p-5"
            };
    }
};

function PhotoNewsCard({
    data: { img, title, time, id },
    variant = "standard",
}: {
    data: PhotoNewsType;
    variant?: string;
}) {
    return (
        <div className={PhotoNewsVariants(variant).card}>
            <Image width={380} height={225} className=" w-full h-full object-cover " src={`${img}`} alt="Photo" loading="lazy" />
            <div className=" z-20 absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                <div className={PhotoNewsVariants(variant).blurBox}>
                    <p className={PhotoNewsVariants(variant).p}>{time}</p>
                    <Link href={`${id}`} className={PhotoNewsVariants(variant).link}>
                        {title}
                    </Link>
                    <div className=" w-full h-full absolute top-0 left-0 bg-black/55 -z-10"></div>
                </div>
            </div>
        </div>
    );
}

export default PhotoNewsCard;
