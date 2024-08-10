import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../features/slices/authSlice";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Tooltip } from "@material-tailwind/react";
import logo from "../../assets/images/logo-01.png";
import Cart from "../cart/Cart";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);

    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const user = useSelector((state) => state.user.user);

    const { name } = user;
    const dispatch = useDispatch();
    return (
        <nav className="nav md:space-x-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div>
                    <Link to="/" className="font-bold tracking-wide">
                        <img src={logo} alt="" className="w-24 h-5" />
                    </Link>
                </div>
                <div className="text-black font-bold hidden md:flex items-center space-x-6">
                    <Link
                        to="/coza-store"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Home
                    </Link>
                    <Link
                        to="/promotions"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Promotions
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Products
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    >
                        Contact
                    </Link>
                </div>
                <div className="flex items-center justify-between space-x-6">
                    <FaUser
                        onClick={() => dispatch(logout())}
                        className="hidden sm:flex text-2xl text-black rounded-full hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                    ></FaUser>
                    <Tooltip content="Sign out" placement="bottom">
                        <p className="font-inter text-sm font-medium tracking-normal leading-none cursor-pointer">
                            Hi {name.charAt("0").toUpperCase() + name.slice(1)}
                        </p>
                    </Tooltip>
                    <div className="flex items-center">
                        <div className="relative cursor-pointer" onClick={handleOpen}>
                            {totalAmount > 0 ? (
                                <>
                                    <FaShoppingCart
                                        to="/cart"
                                        className="text-2xl text-black bg-transparent rounded-full hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110"
                                    />
                                    <span className="absolute bottom-4 left-5 inline-flex items-center justify-center w-4 h-4 bg-light-green-500 rounded-full text-xs font-bold text-white">
                                        {totalAmount}
                                    </span>
                                </>
                            ) : (
                                <FaShoppingCart className="text-2xl text-black bg-transparent rounded-full hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110" />
                            )}
                            {open && <Cart openModel={open} setOpen={setOpen}></Cart>}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="focus:outline-none text-black"
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="text-2xl" />
                            ) : (
                                <FaBars className="text-2xl my-auto ml-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
                <div className="flex absolute left-0 top-14 w-[50%] flex-col bg-white items-center mt-2 font-bold text-black p-2">
                    <Link
                        to="/"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 mb-2"
                    >
                        Home
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 mb-2"
                    >
                        Promotions
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 mb-2"
                    >
                        Products
                    </Link>
                    <Link
                        to="/products"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 mb-2"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/about"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 mb-2"
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className="hover:text-green-300 transition ease-in-out delay-150 over:-translate-y-1 hover:scale-110 mb-2"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
