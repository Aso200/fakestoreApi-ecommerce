"use client";
import { FC } from "react";
import { decreaseQuantity, deleteProduct, increaseQuantity } from "@/redux/cartSlice";
import { ISelectProduct } from "@/lib/types";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import Price from "./Price";
import toast from "react-hot-toast";
import Image from "next/image";

interface Props {
    item: ISelectProduct;
};

const CartItem: FC<Props> = ({ item }) => {

    const dispatch = useDispatch();

    const increase = (id: number) => {

        dispatch(increaseQuantity({ id: id }));

        toast.success("Product Added Successully");

    };

    const decrease = (id: number) => {

        if (item.quantity <= 1) {

            toast("Product Minimum Value Equal To 1", { icon: "🤷🏻‍♂️" });

        } else {

            dispatch(decreaseQuantity({ id: id }));

            toast.success("Product Reduce Successfully");
        }
    };

    return (
        <div className="w-full grid grid-cols-5 mb-4 border py-2">
            <div className="flex col-span-5 md:col-span-2 items-center gap-4 ml-4">
                <ImCross
                    className="text-primeColor hover:text-red-500 cursor-pointer duration-300 mx-2"
                    onClick={() => {
                        dispatch(deleteProduct(item.id));
                        toast.success(
                            `${item?.title.substring(0, 12)}... Deleted From Cart`
                        );
                    }}
                />

                <Image
                    className="w-32 h-32 object-contain ml-5"
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                />

                <h1 className="font-semibold px-2">
                    {item?.title.substring(0, 20)}
                </h1>
            </div>

            <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0">
                <p className="flex md:w-1/3 items-center text-lg font-semibold">
                    <Price amount={item.price} />
                </p>

                <div className="flex md:w-1/3 items-center gap-6 text-lg">
                    <span
                        className="w-7 h-7 bg-black text-white text-2xl flex items-center justify-center cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
                        onClick={() => decrease(item.id)}
                    >
                        -
                    </span>

                    <p className="font-medium">{item.quantity}</p>

                    <span
                        className="w-7 h-7 bg-black text-white text-2xl flex items-center justify-center cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-500"
                        onClick={() => increase(item.id)}
                    >
                        +
                    </span>
                </div>

                <div className="md:w-1/3 flex items-center font-bold text-lg">
                    <Price amount={item.quantity * item.price} />
                </div>
            </div>
        </div>
    )
};

export default CartItem;