import { ISelectProduct } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface StoreState {
    productData: ISelectProduct[];
};

const initialState: StoreState = {
    productData: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.productData.find((item: ISelectProduct) => {
                return item.id === action?.payload.id;
            });
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: any) => item.id === action.payload.id
            );
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productData.find(
                (item: any) => item.id === action.payload.id
            );
            if (existingProduct?.quantity === 1) existingProduct.quantity === 1;
            existingProduct && existingProduct.quantity--;
        },
        deleteProduct: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item.id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        }
    }
});

export const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    resetCart
} = cartSlice.actions;

export default cartSlice.reducer;