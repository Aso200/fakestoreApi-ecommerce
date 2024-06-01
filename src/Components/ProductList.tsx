"use client";
import React, { FC } from "react";
import { IProduct } from "@/lib/types";
import { addToCart } from "@/redux/cartSlice";
import Price from "./Price";
import { BsArrowsFullscreen } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";

interface Props {
    item: IProduct;
};

const ProductList: FC<Props> = ({ item }) => {

    const dispatch = useDispatch();

    const startArray = Array.from({ length: item.rating.rate }, (_, index) => (
        <span key={index} className="text-yellow-400">
            <IoIosStar />
        </span>
    ));

    return (
        <div className="w-full relative group border-[1px] border-black-20 hover:shadow-lg duration-200 rounded-md overflow-hidden group py-3">
            <div className="w-full h-80 flex items-center justify-center bg-white overflow-hidden">
                <div className={`relative`}>
                    <Link href={`product/${item.id}`}>
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={700}
                            height={700}
                            className="w-72 h-72 object-contain"
                        />
                    </Link>

                    <div className="bottom-0 flex items-center gap-5 justify-center translate-y-[110%] group-hover:-translate-y-2 transition-transform duration-300">
                        <button
                            className="bg-black text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:text-white duration-200"
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
                                    `${item.title.substring(0, 12)}... Added To Cart`
                                );
                            }}
                        >
                            <span>
                                <AiOutlineShopping />
                            </span>
                            Add To Bag
                        </button>

                        <Link
                            className="bg-black text-gray-200 px-4 py-2 text-xs rounded-full flex items-center gap-1 hover:text-white duration-200"
                            href={`product/${item.id}`}
                        >
                            <span className="pr-1">
                                <BsArrowsFullscreen />
                            </span>
                            Quick View
                        </Link>
                    </div>
                </div>
            </div>

            <div className="py-6 flex flex-col gap-1 px-4 h-24">
                <h2 className="text-md font-semibold">
                    {item.title.substring(0, 30) + (item.title.length > 30 ? "..." : "")}
                </h2>

                <div className="flex justify-between items-center gap-2 mt-2">
                    <h3 className="text-xl font-semibold">
                        <Price amount={item.price} />
                    </h3>

                    <div className="flex items-center gap-x-1">
                        {startArray}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductList;