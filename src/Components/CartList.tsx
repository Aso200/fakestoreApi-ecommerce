"use client";
import { useEffect, useState } from "react";
import { IStateProps } from "@/lib/types";
import { resetCart } from "@/redux/cartSlice";
import CartItem from "./CartItem";
import Price from "./Price";
import Empty from "./Empty";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const CartList = () => {

    const { productData } = useSelector((state: IStateProps) => state.cart);

    const [totalAmt, setTotalAmt] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {

        let price = 0;

        productData.map((item) => {

            price += item?.price * item?.quantity;

            return price;

        });

        setTotalAmt(price);

    }, [productData]);

    const handleReset = () => {

        const confirmed = window.confirm("Are You Sure To Reset Your Cart?");

        confirmed && dispatch(resetCart());

        toast.success("Cart Reset Successfully!");

    };

    return (
        <>
            {productData?.length > 0 ? (
                <>
                    <div className="pb-4">
                        <div className="w-full h-20 bg-[#f5f7f7] text-primeColor hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
                            <h2 className="col-span-2">Product</h2>
                            <h2>Price</h2>
                            <h2>Quantity</h2>
                            <h2>Sub Total</h2>
                        </div>

                        <div className="mt-5">
                            {productData.map((item) => (
                                <div key={item?.id}>
                                    <CartItem item={item} />
                                </div>
                            ))}
                        </div>

                        <div className="max-w-7xl gap-4 flex justify-center mt-8">
                            <div className="w-[36rem] flex flex-col gap-4">
                                <h1 className="text-2xl font-semibold text-center">Cart Totals</h1>

                                <div>
                                    <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-3 text-lg px-4 font-medium">
                                        Subtotal{" "}
                                        <span>
                                            <Price amount={totalAmt} />
                                        </span>
                                    </p>

                                    <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-3 text-lg px-4 font-medium">
                                        Shipping Charge
                                        <span className="font-semibold tracking-wide font-titleFont">
                                            <Price amount={0} />
                                        </span>
                                    </p>

                                    <p className="flex items-center justify-between border-[1px] border-gray-400 py-3 text-lg px-4 font-medium">
                                        Total
                                        <span className="font-bold tracking-wide text-lg font-titleFont">
                                            <Price amount={totalAmt} />
                                        </span>
                                    </p>
                                </div>

                                <div className="flex flex-col md:flex-row justify-center gap-4">
                                    <button
                                        className="py-2 px-10 bg-red-500 text-white font-semibold uppercase hover:bg-red-700 duration-300"
                                        onClick={handleReset}
                                    >
                                        Reset cart
                                    </button>

                                    <button
                                        className="h-10 px-8 text-white bg-black duration-300"
                                    // onClick={createCheckout}
                                    >
                                        Proceed To Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Empty />
            )}
        </>
    )
};

export default CartList;