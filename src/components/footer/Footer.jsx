/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../assets/images/logo-01.png";
import app from "../../assets/images/app.jpg";
import pay from "../../assets/images/pay.png";
import play from "../../assets/images/play.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div>
            <div className="newsletter flex justify-between flex-wrap items-center bg-no-repeat bg-[20%_30%] bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 p-6 h-40">
                <div className="text">
                    <h4 className="text-2xl font-bold text-white">
                        Sign Up For Newsletter
                    </h4>
                    <p className="text-[#818ea0] text-sm font-semibold">
                        Get E-mail Updates About Our Latest Shop and{" "}
                        <span className="text-[#ffbd27]"> Special Offers </span>
                    </p>
                </div>
                <div className="form flex w-2/5 h-[50px]">
                    <input
                        type="text"
                        placeholder="Your Email Address"
                        className="h-full px-5 text-sm w-full border border-transparent rounded-l outline-none"
                    />
                    <button className="border-none text-white px-8 rounded-r font-bold tracking-widest cursor-pointer bg-[#088178] whitespace-nowrap">
                        Sign Up
                    </button>
                </div>
            </div>
            <div className="footer flex flex-wrap justify-between p-6">
                <div className="col flex flex-col items-start mb-5">
                    <img src={logo} alt="" className="mb-7" />
                    <h4 className="text-sm pb-5 font-bold">Contact</h4>
                    <p className="text-sm mb-2">
                        <strong>Address:</strong> Port-Said Street, Mit-Ghamer, Mansoura
                    </p>
                    <p className="text-sm mb-2">
                        <strong>Phone:</strong> +20 1285147876 / 0504951796
                    </p>
                    <p className="text-sm mb-2">
                        <strong>Hours:</strong> 08:00 - 04:00, Mon - Sat
                    </p>
                    <div className="follow mt-5">
                        <h4 className="text-sm">Follow Us</h4>
                        <div className="flex items-center justify-between gap-2 mt-2">
                            <i className="pr-1 text-[#465b52]">
                                <FaFacebookF />
                            </i>
                            <i className="pr-1 text-[#465b52]">
                                <FaTwitter />
                            </i>
                            <i className="text-[#465b52]">
                                <FaInstagram />
                            </i>
                            <i className="text-[#465b52]">
                                <FaLinkedinIn />
                            </i>
                        </div>
                    </div>
                </div>
                <div className="col flex flex-col items-start mb-5">
                    <h4 className="text-sm pb-5 font-bold">About</h4>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        About Us
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Delivery Information
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Terms & Conditions
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Contact Us
                    </a>
                </div>
                <div className="col flex flex-col items-start mb-5">
                    <h4 className="text-sm pb-5 font-bold">My Account</h4>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Sign In
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        View Cart
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        My Wishlist
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Track My Order
                    </a>
                    <a href="#" className="text-sm mb-2 text-[#222] hover:text-[#088178]">
                        Help
                    </a>
                </div>
                <div className="col install flex flex-col items-start mb-5">
                    <h4 className="text-sm pb-4 font-bold">Install App</h4>
                    <p className="text-sm pb-2">From App Store Or Google Play</p>
                    <div className="row flex gap-2 mb-4">
                        <img src={app} alt="" className="border border-[#088178] rounded" />
                        <img
                            src={play}
                            alt=""
                            className="border border-[#088178] rounded"
                        />
                    </div>
                    <p className="text-sm">Secured Payment Gateways</p>
                    <img src={pay} alt="" className="mt-2" />
                </div>
                <div className="copyright w-full text-center">
                    <p>© {year}, Mohamed Sharaf - E-commerce Project</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
