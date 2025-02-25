import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type CardStyles = {
    parentDiv?: string;
    image?: string;
    informationDiv?: string;
    titleParent?: string;
    title?: string;
    description?: string;
    badge?: string;
};

const CardVariant = (variant: string): CardStyles => {
    switch (variant) {
        case "card":
            return {
                parentDiv:
                    "w-full bg-white shadow-[6px_6px_9.399999618530273px_0px_rgba(0,0,0,0.25)] border border-[#e6e6e6]",
                image: "w-full h-[150px] object-cover",
                informationDiv:
                    "relative py-[10px] px-[12px] flex flex-col items-start gap-y-[8px]",
                titleParent: "absolute bottom-[100%] left-0",
                title:
                    "relative w-5/6 py-[7px] px-[10px] text-[#01075c] text-[12px] font-extrabold z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-white/60 after:backdrop-blur-sm after:-z-10 hover:text-[#ff8400] font-montserrat leading-[15px]",
                description:
                    "text-[#01075c] text-[14px] font-medium leading-[13px]",
                badge:
                    "bg-[#2f348d] inline-flex py-[6px] px-[14px] justify-center items-center gap-x-1 rounded text-white text-[10px] font-medium font-raleway ",
            };
        case "fit":
            return {
                parentDiv: "h-full w-full",
                image: "w-full h-[500px] object-fill",
                informationDiv:
                    "absolute w-full bottom-0 left-0 py-[20px] px-[12px] bg-[#000573]/60 inline-flex items-start flex-col-reverse gap-y-[8px]",
                titleParent: "w-[466.64px]",
                title: "w-full h-full text-white text-xl font-semibold",
                description: "hidden",
                badge:
                    "inline-flex justify-center items-center gap-x-1 rounded text-white text-[8px] font-medium relative z-0 py-[6px] px-[14px] rounded border border-white/10 inline-flex justify-center items-center after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-white/10 after:backdrop-blur-[30px] after:-z-10 overflow-hidden",
            };
        default:
            return {};
    }
};

const StandartNewsCard = ({
    variant = "card",
    data,
}: {
    variant?: string;
    data: any;
}) => {
    const styles = CardVariant(variant);
    return (
        <div className={cn("relative overflow-hidden", styles?.parentDiv)}>
            <img
                src={data.image.src}
                alt={data.image.alt}
                className={cn(styles.image)}
            />
            <div className={cn(styles.informationDiv)}>
                <div className={cn(styles.titleParent)}>
                    <h3 className={cn(styles.title)}>
                        <Link
                            href={`/media/news/${data.id}`}
                            className="hover:text-[#ff8400] transition-colors"
                        >
                            {data.title}
                        </Link>
                    </h3>
                </div>
                <p className={cn(styles.badge)}>
                    <span>{data.publishedAt.date},</span>
                    <span>{data.publishedAt.time}</span>
                </p>
                <p className={cn(styles.description, "text-[12px]")}>{data.description}</p>
            </div>
        </div>
    );
};

export default StandartNewsCard;
