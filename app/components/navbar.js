import React from "react";
import Image from "next/image";
import tim from "../asset/tim.png";
export default function Navbar() {
  return (
    <header className="p-12">
      <div className="container flex justify-between mx-auto">
        <a href="/" className="flex items-center p-2">
          <Image src={tim} alt="tim" width="80" height="80" />
        </a>
        <ul className="font-sans items-stretch text-sm md:text-base flex  md:flex">
          <li className="flex ">
            <a
              href="/"
              className="flex items-center px-4 border-b-2 dark:border-transparent">
              Home
            </a>
          </li>
          <li className="flex">
            <a
              href=""
              className="flex items-center px-4  border-b-2 dark:border-transparent">
              DexScreener
            </a>
          </li>
          <li className="flex">
            <a
              href=""
              className="flex items-center px-4  border-b-2 dark:border-transparent">
              DexTools
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
