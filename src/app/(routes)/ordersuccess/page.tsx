"use client";
import React, { useEffect } from "react";
import Wrapper from "@/Components/Wrapper";
import { resetCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import confetti from "canvas-confetti";

const OrderSuccess = () => {

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
        <div className="flex flex-col justify-center items-center px-5 sm:px-20 py-8 sm:py-16">
            <Wrapper>
                <div className="flex justify-center items-center">
                    <img
                        className="w-full mx-auto"
                        alt="Thanks Shipping Image"
                        src="./thanks.png"
                    />
                </div>

                <div className="flex flex-col justify-center items-center mt-8 mb-6">
                    <button
                        className="bg-black hover:bg-black/95 text-white p-4 rounded-md"
                        onClick={() => { router.push("/products"); }}
                    >
                        Continue Shopping
                    </button>
                </div>
            </Wrapper>
        </div>
    )
};

export default OrderSuccess;