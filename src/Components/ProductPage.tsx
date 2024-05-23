import React, { FC } from "react";
import { IProduct } from "@/lib/types";
import Wrapper from "./Wrapper";

const ProductPage: FC<IProduct | any> = ({ item }) => {
    return (
        <div className="px-6 sm:px-16 py-12">
            <Wrapper>
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                </div>
            </Wrapper>
        </div>
    )
};

export default ProductPage;