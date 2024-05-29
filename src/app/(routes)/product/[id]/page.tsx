import ProductPage from "@/Components/ProductPage";
import { ISelectProduct } from "@/lib/types";
import { API } from "@/lib/service";
import { redirect } from "next/navigation";
import axios from "axios";

type Prop = {
    params: {
        id: string;
    };
};

const getProductData = async (id: string) => {

    try {

        const response = await axios.get(`${API}/${id}`);

        return response.data;

    } catch (error) {

        console.log("Error");

    }

};

const Product = async ({ params }: Prop) => {

    const { id } = params;

    const response: ISelectProduct = await getProductData(id);

    if (!response.id) return redirect("/products");

    return <ProductPage item={response} />
};

export default Product;