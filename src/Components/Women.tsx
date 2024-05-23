import React, { FC } from "react";
import { IProduct } from "@/lib/types";
import Link from "next/link";

const Women: FC<IProduct | any> = ({ item }) => {
    return (
        <div className="p-4 lg:p-6">
            <Link href={`product/${item.id}`}>
                <img
                    className="w-full h-80 object-cover object-center rounded my-4"
                    src={item.image}
                    alt={item.title}
                />

                <h2 className="text-md my-1 font-semibold text-center">
                    {item.title}
                </h2>

                <h3 className="text-xl my-2 font-semibold">
                    $ {item.price}
                </h3>
            </Link>
        </div>
    )
};

export default Women;