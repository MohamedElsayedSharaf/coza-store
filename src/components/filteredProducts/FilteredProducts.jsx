import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Navbar from "../navbar/Navbar";
import Error from "../error/Error";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa6";
import {
  filterByColor,
  filterBySize,
  filterGender,
  filterProducts,
  sortByPrice,
} from "../../features/slices/productSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.product.filteredProducts);
  const error = useSelector((state) => state.product.error);
  const genderBtns = ["male", "female"];
  const colorBtns = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeBtns = ["S", "M", "L", "XL"];
  const { type } = useParams();
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-5xl pb-5 flex items-center justify-center font-inter font-bold text-gray-600 tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8">
            <div className="flex items-center">
              {genderBtns.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      color="gray"
                      variant="outlined"
                      size="lg"
                      ripple={true}
                      className="text-black hover:text-green-300 mr-2 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                variant="outlined"
                size="lg"
                ripple={true}
                className="text-black hover:text-green-300 mr-2 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    variant="outlined"
                    size="lg"
                    ripple={true}
                    className="text-black flex hover:text-green-300 mr-2 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                  >
                    Select a color
                    <FaChevronDown />
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorBtns.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === 'Bags'}
                    color="gray"
                    variant="outlined"
                    size="lg"
                    ripple={true}
                    className="text-black flex hover:text-green-300 mr-2 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                  >
                    Select a size
                    <FaChevronDown />
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeBtns.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                color="gray"
                variant="outlined"
                size="lg"
                ripple={true}
                className="text-black hover:text-green-300 mr-2 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                onClick={() => dispatch(filterProducts(type))}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
        {error ? (
          <Error />
        ) : (
          <div className="grid grid-cols-3 justify-items-center py-8 gap-12">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index}>
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    />
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
