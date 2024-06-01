"use client";
import React, { FC } from "react";
import { ISelectProduct } from "@/lib/types";
import { addToCart } from "@/redux/cartSlice";
import Wrapper from "./Wrapper";
import Price from "./Price";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { IoIosStar } from "react-icons/io";
import toast from "react-hot-toast";

interface Props {
    item: ISelectProduct;
};

const ProductPage: FC<Props> = ({ item }) => {

    const startArray = Array.from({ length: item.rating.rate }, (_, index) => (
        <span key={index} className="text-yellow-400">
            <IoIosStar />
        </span>
    ));

    const dispatch = useDispatch();

    return (
        <div className="px-6 sm:px-16 py-12">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full bg-gray-50 p-4">
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
                            <h2 className="text-2xl md:text-3xl font-semibold">
                                {item.title}
                            </h2>

                            <div className="flex justify-start gap-x-7 md:gap-x-10 items-center">
                                <h3 className="text-lg md:text-xl font-semibold">
                                    <Price amount={item.price} />
                                </h3>

                                <div className="flex items-center gap-x-1 md:gap-x-2">
                                    <h3 className="md:text-lg font-semibold">Product Rating: </h3>
                                    {startArray}
                                </div>
                            </div>

                            <p className="text-md tracking-wide text-gray-600">
                                {item.description}
                            </p>

                            <button
                                className="bg-black hover:bg-black/95 duration-300 text-white text-md sm:text-lg rounded-md p-3 sm:p-4"
                                onClick={() => {
                                    dispatch(addToCart({
                                        id: item.id,
                                        title: item.title,
                                        price: item.price,
                                        description: item.description,
                                        category: item.category,
                                        image: item.image,
                                        quantity: 1,
                                        rating: {
                                            rate: item.rating.rate,
                                            count: item.rating.count
                                        }
                                    }));
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