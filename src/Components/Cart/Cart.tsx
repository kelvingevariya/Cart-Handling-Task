import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RootState } from "../../Store/RootStore"
import typeArr from "../../Slice/productSlice"

import { orderProducts } from "../../Slice/productSlice"
import {
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
} from "../../Slice/productSlice"

function claculateTotal(arr: orderProducts[]) {
  let sum = 0
  arr.forEach((data: orderProducts) => {
    if (data.numberOfItems) {
      const value = data.price * data.numberOfItems
      sum += value
    }
  })

  return sum
}

function Cart() {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.product)
  const total = claculateTotal(products)

  const submitData = () => {
    console.log(products)
  }

  return (
    <section className="h-screen py-12 bg-gray-100 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
        </div>

        <div className="max-w-2xl mx-auto mt-8 md:mt-12">
          <div className="bg-white shadow">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="-my-8">
                  {products.map((data: orderProducts) => {
                    return (
                      <li
                        key={Math.random() * 1213421740}
                        className="flex flex-col py-6 space-y-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                      >
                        <div className="shrink-0">
                          <img
                            className="object-cover w-24 h-24 max-w-full rounded-lg"
                            src={data.image}
                            alt="image"
                          />
                        </div>

                        <div className="relative flex flex-col justify-between flex-1">
                          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                            <div className="pr-8 sm:pr-5">
                              <p className="text-base font-semibold text-gray-900">
                                {data.title}
                              </p>
                            </div>

                            <div className="flex items-end justify-between mt-4 sm:mt-0 sm:items-start sm:justify-end">
                              <p className="w-20 text-base font-semibold text-gray-900 shrink-0 sm:order-2 sm:ml-8 sm:text-right">
                                ₹ {data.price}
                              </p>

                              <div className="sm:order-1">
                                <div className="flex items-stretch h-8 mx-auto text-gray-600">
                                  <button
                                    onClick={() => {
                                      dispatch(decreaseQuantity(data.id))
                                    }}
                                    className="flex items-center justify-center px-4 transition bg-gray-200 rounded-l-md hover:bg-black hover:text-white"
                                  >
                                    -
                                  </button>
                                  <div className="flex items-center justify-center w-full px-4 text-xs uppercase transition bg-gray-100">
                                    {data.numberOfItems}
                                  </div>
                                  <button
                                    onClick={() => {
                                      dispatch(increaseQuantity(data.id))
                                    }}
                                    className="flex items-center justify-center px-4 transition bg-gray-200 rounded-r-md hover:bg-black hover:text-white"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                            <button
                              onClick={() => dispatch(removeProduct(data.id))}
                              type="button"
                              className="flex p-2 text-center text-gray-500 transition-all duration-200 ease-in-out rounded focus:shadow hover:text-gray-900"
                            >
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"
                                  className=""
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="py-2 mt-6 border-t border-b">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Subtotal</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ₹ {total.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">Shipping</p>
                  <p className="text-lg font-semibold text-gray-900">
                    ₹ {total === 0 ? 0 : 8}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  <span className="text-xs font-normal text-gray-400">Rs</span>{" "}
                  {total === 0 ? 0 : (total + 8).toFixed(2)}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={submitData}
                  type="button"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out bg-gray-900 rounded-md group focus:shadow hover:bg-gray-800"
                >
                  Checkout
                </button>
                <Link
                  to="/"
                  type="button"
                  className="inline-flex items-center justify-center w-full px-6 py-4 mt-10 text-lg font-semibold text-black transition-all duration-200 ease-in-out bg-gray-300 rounded-md group focus:shadow hover:bg-gray-400"
                >
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
