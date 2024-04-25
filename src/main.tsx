import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Cart from "./Components/Cart/Cart.tsx"
import Home from "./Components/Home/Home.tsx"
import { Provider } from "react-redux"
import { RootStore } from "./Store/RootStore.ts"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={RootStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
