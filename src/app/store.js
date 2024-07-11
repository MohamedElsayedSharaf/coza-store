import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from '../features/slices/sliderSlice'
import productReducer from "../features/slices/productSlice";
import  cartReducer  from "../features/slices/cartSlice";
import authReducer from "../features/slices/authSlice";
export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        product: productReducer,
        cart: cartReducer,
        user: authReducer,
    },
})