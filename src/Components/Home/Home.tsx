import React, { useEffect, useState } from "react"
import Card from "../Card/Card"
import { Link } from "react-router-dom"

function Home() {
  const [products, setProducts] = useState([])

  const data = () => {
    const products = fetch("/products.json")
      .then((resp: any) => resp.json())
      .then((jsonData) => setProducts(jsonData))
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <div>
      <Link
        to="/cart"
        className=" mt-10 px-8 py-4 sticky top-1 left-[90%]    rounded-md bg-white ml-4  text-center text-sm font-medium text-black hover:bg-gray-400 "
      >
        View Cart
      </Link>
      <div className="flex justify-center ">
        <div className="grid items-center justify-center grid-cols-3 ">
          {products &&
            products.map((data: any) => {
              return (
                <Card
                  obj={data}
                  key={data.id * Math.random()}
                  id={data.id}
                  price={data.price}
                  description={data.description}
                  image={data.image}
                  title={data.title}
                  rating={data.rating.rate}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Home
