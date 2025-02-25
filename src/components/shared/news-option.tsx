"use client";
import { useRouter } from "next/navigation";

const SectionOption = {
    title: "BO'LIMLAR",
    options: [
        {
            title: "Andijon v",
            link: "/"
        },
        {
            title: "Ijtimoiy-iqtisodiy",
            link: "/"
        },
        {
            title: "Madaniy-marifiy",
            link: "/"
        },
        {
            title: "Mahnat muhofazasi",
            link: "/"
        },
        {
            title: "Navoiy v",
            link: "/"
        },
        {
            title: "Respublika kengash yangiliklari",
            link: "/"
        },
        {
            title: "Tashkiliy ishlar",
            link: "/"
        },
        {
            title: "Farg'ona v",
            link: "/"
        },
        {
            title: "Huquqiy himoya",
            link: "/"
        }
    ],
};

const NewsOption = () => {
    const router = useRouter();

    return (
        <div className="flex items-start flex-col gap-y-4">
            <div className=" w-full">
                <h2 className="py-[15px] px-[25px] bg-[#000573] text-white font-montserrat text-center text-2xl font-bold ">
                    HUDUDLAR
                </h2>
                {SectionOption.options.map((section, idx) => (
                    <div
                        role="button"
                        className="py-[15px] px-[25px] bg-[#000573] text-white text-base font-bold my-[5px]"
                        key={section.title + idx}
                        onClick={() => router.push(section.link)}
                    >
                        {section.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsOption;
