import { configureStore } from "@reduxjs/toolkit"

import ProductReducer from "../Slice/productSlice"

export const RootStore = configureStore({
  reducer: { product: ProductReducer },
})

export type RootState = ReturnType<typeof RootStore.getState>
export type AppDispatch = typeof RootStore.dispatch
