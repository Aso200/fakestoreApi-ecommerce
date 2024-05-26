import CartList from "@/Components/CartList";
import Wrapper from "@/Components/Wrapper";

const Cart = () => {
    return (
        <div className="px-6 sm:px-16 py-12">
            <Wrapper>
                <CartList />
            </Wrapper>
        </div>
    )
};

export default Cart;