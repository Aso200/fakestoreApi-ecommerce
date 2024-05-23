import Wrapper from "@/Components/Wrapper";
import { IProduct } from "@/lib/types";
import Men from "@/Components/Men";
import { API } from "@/lib/service";
import axios from "axios";

const getProductData = async () => {

    try {

        const response = await axios.get(`${API}/category/men's clothing`);

        return response;

    } catch (error) {

        console.log("Error");

    }

};

const Mens = async () => {

    const response: any = await getProductData();

    return (
        <div className="px-6 sm:px-16 py-12">
            <Wrapper>
                <div className="grid justify-center grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {response.data?.map((item: IProduct, i: number) => (
                        <div key={i}>
                            <Men
                                item={item}
                            />
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
};

export default Mens;