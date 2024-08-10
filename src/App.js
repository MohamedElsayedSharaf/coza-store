import React from "react"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./components/main/Main"
import FilteredProducts from "./components/filteredProducts/FilteredProducts"
import SingleProduct from "./components/filteredProducts/SingleProduct"

import { useSelector } from "react-redux"
import Login from "./components/login/Login"


function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user
  
  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/coza-store" element={authUser ? <Main /> : <Login />}></Route>
            <Route path="/filteredProducts/:type" element={<FilteredProducts />}></Route>
            <Route path="/filteredProducts/:type/:id" element={<SingleProduct />}></Route>
          </Routes>
        </BrowserRouter>

    </div>
)
}
export default App
