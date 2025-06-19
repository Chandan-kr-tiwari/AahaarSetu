import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    // This reducer is for the overall app reducer inside which has many reducers for many slices
    reducer:{
        cart:cartReducer
    }
})

export default appStore