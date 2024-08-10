import { Button } from "@material-tailwind/react";
import React from "react";
import clothes from '../../assets/images/clothes.jpg';
import { useDispatch } from "react-redux";
import { filterProducts } from "../../features/slices/productSlice";
import { Link } from "react-router-dom";

const NavButtons = () => {
    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
    ];
    const dispatch = useDispatch();
    return (
        <div>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 space-x-2 items-center space-y-3 p-8 bg-white">
                {buttons.map((button, index) => (
                    <div key={index} className="mr-4">
                        <Link to={"/filteredProducts/" + button}>
                            <Button
                                color="gray"
                                size="lg"
                                variant="outlined"
                                ripple={true}
                                className="hover:bg-gray-300 duration-300 ease-in-out"
                                onClick={() => dispatch(filterProducts(button))}
                            >
                                {button}
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="bg-black p-2 w-[55%] mx-auto rounded-md">
                <h3 className="text-orange-900 text-center font-inter text-lg font-bold tracking-normal leading-none">Sales Up To 50%</h3>
            </div>
            <div className="flex justify-center items-center py-4">
                <img className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600" src={clothes} alt="" />
            </div>
        </div>
    );
};

export default NavButtons;
