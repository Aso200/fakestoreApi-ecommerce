"use client";
import React, { FC } from "react";
import { IProduct } from "@/lib/types";
import { addToCart } from "@/redux/cartSlice";
import Wrapper from "./Wrapper";
import Price from "./Price";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import toast from "react-hot-toast";

const ProductPage: FC<IProduct | any> = ({ item }) => {

    const startArray = Array.from({ length: item.rating.rate }, (_, index) => (
        <span key={index} className="text-yellow-400">
            <IoIosStar />
        </span>
    ));

    const dispatch = useDispatch();

    return (
        <div className="px-6 sm:px-16 py-12">
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 h-full bg-gray-50 p-4">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap p-5 rounded-sm bg-white">
                        <Image
                            className="w-full h-full object-contain"
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className="w-full md:col-span-2 xl:p-14 flex flex-col gap-6 justify-center">
                        <div className="flex flex-col gap-5">
                            <h2 className="text-4xl font-semibold">
                                {item.title}
                            </h2>

                            <div className="flex justify-start gap-8 items-center">
                                <h3 className="text-xl font-semibold">
                                    <Price amount={item.price} />
                                </h3>

                                <div className="flex items-center gap-x-1">
                                    <h3 className="text-lg font-medium">Rating: </h3> {startArray}
                                </div>
                            </div>

                            <p className="text-md tracking-wide text-gray-600">
                                {item.description}
                            </p>

                            <button
                                className="bg-black hover:bg-black/95 duration-300 text-white text-lg rounded-md p-4"
                                onClick={() => {
                                    dispatch(addToCart(item));
                                    toast.success(
                                        `${item?.title.substring(0, 12)}... Added To Cart`
                                    );
                                }}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default ProductPage;