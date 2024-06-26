"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="navbar z-10 sticky w-full">

            <div className="flex flex-row place-content-end py-12">
                <div className="hidden lg:flex grid grid-flow-col gap-8 lg:text-2xl px-14 text-[#0c39e0]">

                <Link href="#about-us">
                    About
                </Link>

                <Link href="#FAQ">
                    FAQ
                </Link>
                <Link href="#Sponsors">
                   Sponsors
                </Link>
                </div>


            <div className="lg:hidden place-content-center items-center px-4">
            <button
                onClick={handleClick}
                className="flex flex-col justify-center items-center"
            >
                <span
                className={`bg-[#003CAF] block transition-all duration-300 ease-out 
                                    h-1 w-9 rounded-sm ${
                                    isOpen
                                        ? "rotate-45 translate-y-2"
                                        : "-translate-y-0.5"
                                    }`}
                ></span>
                <span
                className={`bg-[#003CAF] block transition-all duration-300 ease-out 
                                    h-1 w-9 rounded-sm my-1 ${
                                    isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                ></span>
                <span
                className={`bg-[#003CAF] block transition-all duration-300 ease-out 
                                    h-1 w-9 rounded-sm ${
                                    isOpen
                                        ? "-rotate-45 -translate-y-2"
                                        : "translate-y-0.5"
                                    }`}
                ></span>
            </button>
            </div>
            </div>

         
            
        </div>
    )
}