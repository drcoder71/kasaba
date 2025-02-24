"use client";

import { cn } from "@/lib/utils";
import { useLanguageStore } from "@/store/language-store";
import { Languages } from "lucide-react";
import { useCallback, useState } from "react";

export default function LanguageSwitcher() {
    const { language } = useLanguageStore();
    const [toggle, setToggle] = useState<boolean>(false)

    const toggleHandler = useCallback(() => {
        setToggle(prev => !prev)
    }, [toggle])

    return (
        <div className="rounded-lg relative z-90">
            <button className="relative flex items-center gap-x-2 text-white roundedtext-[8px] font-medium z-10 py-[6px] px-[14px] rounded border border-white/10 after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-white/10 after:backdrop-blur-[30px] after:-z-10 overflow-hidden" onClick={toggleHandler}>
                <h5 className="text-sm">{language.toUpperCase()}</h5>
                <Languages />
            </button>
            {/* <div className={cn("flex flex-col absolute top-[-500px] left-0 gap-2 mt-2 transition-all translate-x-[50%]", toggle && "top-10")}>
                <button
                    onClick={() => {
                        setLanguage("o'zbek")
                        closeHandler()
                    }}
                    className={`px-4 py-2 text-sm rounded ${language === "o'zbek" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    O'zbekcha
                </button>

                <button
                    onClick={() => {
                        setLanguage("uzbek")
                        closeHandler()
                    }}
                    className={`px-4 py-2 text-sm rounded ${language === "uzbek" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    uzbekcha
                </button>

                <button
                    onClick={() => {
                        setLanguage("pусский")
                        closeHandler()
                    }}
                    className={`px-4 py-2 text-sm rounded ${language === "pусский" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    Русский
                </button>
            </div> */}
        </div >
    );
}
