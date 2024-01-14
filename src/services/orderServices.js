import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_url } from "../firebase/database" 

export const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({baseUrl:base_url}),
    endpoints: (builder) => ({
        getOrders: builder.query({
            query: () => 'orders.json',
            // query: (user) => `products.json?orderBy="user"&equalTo="${user}"`,
            
        }),
    })
})

export const {useGetOrdersQuery} = orderApi;