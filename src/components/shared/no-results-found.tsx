import Image from "next/image";
import React from "react";

function NoResultsFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        src={"/icon/no-result-found.svg"}
        width={150}
        height={150}
        alt="no found"
      />
      <h3 className=" font-bold text-xl">Natijalar Yo'q</h3>
      <p className=" font-normal text-sm text-zinc-500 text-center">
        sizning so'rovingiz bo'yicha hech <br /> qanday natija topilmadi
      </p>
    </div>
  );
}

export default NoResultsFound;
