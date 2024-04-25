import { useState } from "react"

import Card from "./Components/Card/Card"
import Home from "./Components/Home/Home"
import Cart from "./Components/Cart/Cart"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className=" bg-slate-950 justify-center">
      <Outlet />
    </div>
  )
}

export default App
