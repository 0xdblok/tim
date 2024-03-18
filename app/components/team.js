import React from "react";
import Image from "next/image";
import tim from "../asset/tim.png";
import cz from "../asset/cz.png";
import anatoly from "../asset/anatoly.png";
export default function Team() {
  return (
    <div className="flex font-sans text-lg font-medium text-[#E60BD9]  pt-12 flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="text-center">
          <h1 className="pb-4">Tim</h1>
          <Image
            className=" w-20 h-20 rounded-full ring-2 ring-offset-4  ring-[#E60BD9] ring-offset-slate-50"
            src={tim}
            alt="tim"
            width="36"
            height="36"
          />{" "}
        </div>
        <div className="text-center">
          <h1 className="pb-4">CZ</h1>
          <Image
            className="w-20 h-20  rounded-full ring-2 ring-offset-4  dark:ring-[#E60BD9]ring-offset-slate-50"
            src={cz}
            alt="tim"
            width="36"
            height="36"
          />
        </div>
        <div className="text-center">
          <h1 className="pb-4">Anatoly</h1>
          <Image
            className="w-20 h-20 rounded-full ring-2 ring-offset-4  ring-[#E60BD9] ring-offset-slate-50"
            src={anatoly}
            alt="tim"
            width="36"
            height="36"
          />
        </div>
      </div>
    </div>
  );
}
