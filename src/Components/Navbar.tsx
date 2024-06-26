"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import { NAV_ITEMS } from "@/lib/static";
import Wrapper from "./Wrapper";
import { Menu as MenuIcon, ShoppingBagIcon, X } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [totalAmt, setTotalAmt] = useState<number>(0);

    const { productData } = useSelector(
        (state: any) => state.cart
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const pathname = usePathname();

    useEffect(() => {

        let amt = 0;

        productData.map((item: any) => {

            amt += item.price * item.quantity;

            return;
        });

        setTotalAmt(amt);

    }, [productData]);

    return (
        <nav className="sticky w-full z-20 px-5 py-4 sm:px-20 top-0 bg-opacity-10 shadow-lg backdrop-blur-xl border-opacity-20">
            <Wrapper>
                <div className="flex flex-wrap items-center justify-between wrapper">
                    <div className="flex justify-center items-center">
                        <Link href="/">
                            <Image
                                className="my-3 cursor-pointer"
                                src="/Logo.png"
                                alt="Logo"
                                width={120}
                                height={120}
                            />
                        </Link>
                    </div>

                    <div className="flex lg:order-2 rtl:space-x-reverse">
                        <div className="flex items-center justify-center gap-[0.6rem] md:gap-6">
                            <Link href="/cart">
                                <button className="p-[0.6rem] md:p-[0.7rem] rounded-full text-black bg-gray-300">
                                    <ShoppingBagIcon />

                                    <span className="absolute top-6 bg-red-600 text-white w-6 h-6 rounded-full">
                                        {productData ? productData?.length : 0}
                                    </span>
                                </button>
                            </Link>

                            <SignedOut>
                                <SignInButton>
                                    <Button className="bg-black">
                                        Log In
                                    </Button>
                                </SignInButton>
                            </SignedOut>

                            <SignedIn>
                                <UserButton
                                    appearance={{
                                        elements: {
                                            avatarBox: "h-[40px] w-[40px]"
                                        }
                                    }}
                                    afterSignOutUrl="/"
                                />
                            </SignedIn>
                        </div>

                        <div className="lg:hidden">
                            <button
                                className="p-2 text-gray-900 rounded-md font-medium outline-none"
                                onClick={toggleMenu}
                            >
                                {isMenuOpen ? <X className="h-6 w-6" />
                                    : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`text-lg items-center justify-between ${isMenuOpen ? "flex" : "hidden"} 
                        w-full lg:flex lg:w-auto md:order-1`}
                        id="navbar-sticky"
                    >
                        <div
                            className="flex flex-col lg:flex-row items-center w-full p-2 lg:p-0 mt-2 lg:mt-0 font-medium gap-4 lg:gap-8"
                        >
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        className={
                                            `py-2 px-2 text-[1.02rem] font-medium" hover:cursor-pointer hover:font-bold  ${item.page === pathname && "font-semibold text-black"}`
                                        }
                                        href={item.page}
                                        key={idx}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </nav>
    );
};

export default Navbar;