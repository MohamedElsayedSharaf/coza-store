import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import FilteredProducts from "./components/filteredProducts/FilteredProducts";
import SingleProduct from "./components/filteredProducts/SingleProduct";

import { useSelector } from "react-redux";
import Login from "./components/login/Login";

function App() {
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  console.log(user)
  return  (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={authUser ? <Main></Main> : <Login></Login>}
          ></Route>

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
