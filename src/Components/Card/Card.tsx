import React from "react"

import ShowMoreText from "react-show-more-text"
import { addProduct, increaseQuantity } from "../../Slice/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { RootState } from "../../Store/RootStore"

export interface products {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: { rate: number; count: number }
}

function Card(props: any) {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.product)
  const handleAddToCart = () => {
    toast.success(`Added`)
    const addToCartObj = {
      id: props.id,
      price: props.price,
      image: props.image,
      title: props.title,
    }
    if (products.some((data) => (data.id === addToCartObj.id ? true : false))) {
      dispatch(increaseQuantity(addToCartObj.id))
    } else {
      dispatch(addProduct(addToCartObj))
    }
  }
  return (
    <div className="flex flex-col justify-between min-w-[95%] pt-6 px-6  gap-4 m-10  max-w-xs  rounded-lg bg-white shadow-md">
      <img className="mx-auto h-60" src={props.image} alt="product image" />

      <div className="px-5 pb-5 mt-4">
        <h5 className="text-xl font-semibold tracking-tight text-slate-900">
          {props.title}
        </h5>

        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 text-sm font-bold text-slate-900">
            Rating :{" "}
          </span>
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {props.rating}
          </span>
        </div>
        <div className="text-sm font-bold text-slate-900 ">
          Description :{" "}
          <ShowMoreText className="font-normal " lines={1}>
            {props.description}
          </ShowMoreText>
        </div>

        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ₹ {props.price}
            </span>
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="flex items-center rounded-md bg-slate-900 ml-4 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </button>
      </div>
      <ToastContainer theme="colored" position="bottom-left" />
    </div>
  )
}

export default Card
