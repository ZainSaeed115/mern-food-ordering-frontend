import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "@/api/CreateApiSlice"
import userSlices from "@/slices/userSlices"
import { setupListeners } from "@reduxjs/toolkit/query"
export const store=configureStore({
    reducer:{
        [apiSlice.reducerPath]:apiSlice.reducer,
        user:userSlices
    },
 middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
 devTools:true
})

setupListeners(store.dispatch)