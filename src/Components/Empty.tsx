import React from "react";
import emptyCart from "../../public/emptyCart.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Empty = () => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center gap-4 pb-20"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div>
                <Image
                    className="w-80 rounded-lg p-4 mx-auto"
                    alt="Empty Cart"
                    src={emptyCart}
                />
            </div>

            <div className="max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg">
                <h1 className="text-xl font-bold uppercase">
                    Your Cart Feels Lonely.
                </h1>

                <p className="text-sm text-center px-10 -mt-2">
                    Your Shopping Cart Lives To Serve. Give It Purpose - Fill It With
                    Books, Electronics, Videos, etc. and Make It Happy.
                </p>

                <Link
                    className="bg-black hover:bg-black/95 text-white p-4 rounded-md"
                    href={"/products"}
                >
                    Continue Shopping
                </Link>
            </div>
        </motion.div>

    )
}

export default Empty;