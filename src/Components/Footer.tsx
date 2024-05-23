"use client";
import { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {

        if (window.pageYOffset > 0) {

            setIsVisible(true);

        } else {

            setIsVisible(false);

        }
    };

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="w-full py-6">
            <Wrapper>
                <div className="flex justify-center items-center">
                    <Link href="/">
                        <Image
                            className="my-4 cursor-pointer"
                            src="/Prime.png"
                            alt="Logo"
                            width={150}
                            height={150}
                        />
                    </Link>
                </div>

                <div className="flex items-center justify-center my-4">
                    <h1 className="text-[1rem] text-center font-medium">
                        Copyright © 2024 By Prime Market
                    </h1>
                </div>

                <div className="my-6 flex justify-center items-center">
                    <button
                        className="text-white p-2 bg-black rounded-md"
                        onClick={scrollToTop}
                    >
                        <ArrowUp className="w-7 h-7 bg-black" />
                    </button>
                </div>
            </Wrapper>
        </div>
    )
};

export default Footer;