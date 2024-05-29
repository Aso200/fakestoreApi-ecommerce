"use client";
import React, { useEffect } from "react";
import Wrapper from "@/Components/Wrapper";
import { resetCart } from "@/redux/cartSlice";
import { ShoppingBagIcon } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import confetti from "canvas-confetti";

const OrderSuccess = ({ searchParams }: any) => {

    const dispatch = useDispatch();

    const router = useRouter();

    const createConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 100,
            origin: { y: 0.6 },
        })
    };

    useEffect(() => {

        createConfetti();

        dispatch(resetCart());

    }, []);

    return (
        <div className="flex flex-col justify-center items-center px-5 sm:px-20 py-12 sm:py-20">
            <Wrapper>
                <div className="flex justify-center items-center mb-8 mt-4">
                    <ShoppingBagIcon className="w-28 h-28 text-[#008000]" />
                </div>

                <h1 className="text-center text-3xl md:text-5xl font-bold leading-[2rem]">
                    Thank You For Your Order!
                </h1>

                <div className="flex flex-col justify-center items-center mt-8 mb-6">
                    <button
                        className="bg-black hover:bg-black/95 text-white p-4 rounded-md"
                        onClick={() => { router.push("/"); }}
                    >
                        Continue Shopping
                    </button>
                </div>
            </Wrapper>
        </div>
    )
};

export default OrderSuccess;