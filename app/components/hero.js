import React from "react";
import Image from "next/image";
import timpc from "../asset/timpc.png";
export default function Hero() {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-center text-4xl font-semibold font-mono text leading-none sm:text-5xl">
            Tim
            <span className="text-[#E60BD9]"> Yakavenko</span>
          </h1>
          <p className="mt-6 mb-8 font-sans text-lg sm:mb-12">
            In the bustling metropolis of Crypto City, where blockchain dreams
            meet the neon glow of trading terminals, two figures stand out
            amidst the chaos: CZ DegenTrader and his cousin, Tim Yakovenko, the
            lesser-known but equally adventurous relative of the Solana founder.
          </p>
          <div className="flex font-sans flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="https://www.pump.fun/2NkykHcdHdaXeRrSPcKWxrGGUpi1oC3gX8zQ1nTXy2L1"
              className="px-6 py-3 text-xl font-semibold rounded-lg bg-[#E60BD9]">
              Buy Now
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src={timpc}
            alt="tim"
            width="450"
            height="450"
            className="object-contain rounded-lg h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
