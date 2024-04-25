import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import { products } from "../Components/Card/Card"

export interface orderProducts {
  id: number
  price: number
  image: string
  title: string
  numberOfItems: number
}

const initialState: orderProducts[] = []

export type typeArr = typeof initialState

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push({ ...action.payload, numberOfItems: 1 })
    },

    removeProduct: (state, action) => {
      const index = state.findIndex((data) => data.id === action.payload)
      state.splice(index, 1)
    },
    increaseQuantity: (state, action) => {
      const index = state.findIndex((data) => data.id === action.payload)
      //
      state[index].numberOfItems++
    },
    decreaseQuantity: (state, action) => {
      const index = state.findIndex((data) => data.id === action.payload)

      if (state[index].numberOfItems > 1) {
        state[index].numberOfItems--
      } else {
        state[index].numberOfItems = 1
      }
    },
  },
})

export const { removeProduct, increaseQuantity, decreaseQuantity, addProduct } =
  productSlice.actions

export default productSlice.reducer
