import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../features/shopSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { orderApi } from "../services/orderServices";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";

const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware).concat(orderApi.middleware)
})

setupListeners(store.dispatch)

export default store