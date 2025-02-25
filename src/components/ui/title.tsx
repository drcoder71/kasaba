import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type TitleProps = {
    title: string;
    variant?: string;
    miniTitle?: string;
    miniTitleVisible?: boolean;
    link?: string;
};

const TitleVariants = (variant: string = "standard") => {
    switch (variant) {
        case "standard":
            return {
                div: "flex items-center justify-center gap-2",
                title: "text-orange-500 font-montserrat font-bold text-4xl text-nowrap",
                hr: "border-orange-500 border-2 w-full",
                miniTitle:
                    "text-orange-500 font-montserrat font-bold text-base hidden hover:text-black duration-200"
            };
        case "withMiniTitle":
            return {
                div: "flex items-center justify-center gap-2",
                title: "text-orange-500 font-montserrat font-bold text-4xl text-nowrap",
                hr: "border-orange-500 border-2 w-full",
                miniTitle:
                    "text-orange-500 font-montserrat font-bold text-base hover:text-black duration-200"
            };
        default:
            return {
                div: "flex items-center justify-center gap-2",
                title: "text-orange-500 font-montserrat font-bold text-4xl text-nowrap",
                hr: "border-orange-500 border-2 w-full",
                miniTitle:
                    "text-orange-500 font-montserrat font-bold text-base hidden hover:text-black duration-200"
            };
    }
};

function Title({
    title,
    miniTitle,
    variant = "standard",
    link = "",
}: TitleProps) {
    return (
        <div className={cn("my-[50px]", TitleVariants(variant).div)}>
            <p className={cn(TitleVariants(variant).title)}>{title}</p>
            <hr className={cn(TitleVariants(variant).hr)} />
            {miniTitle && link && (
                <Link href={link} className={cn(TitleVariants(variant).miniTitle)}>
                    {miniTitle}
                </Link>
            )}
        </div>
    );
}

export default Title;
