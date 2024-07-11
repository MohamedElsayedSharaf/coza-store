import React from "react";
import {
    nextSlide,
    prevSlide,
    dotSlide,
} from "../../features/slices/sliderSlice";
import { sliderData } from '../../assets/data/dummyData';
import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
    const slideIndex = useSelector((state) => state.slider.value);
    const dispatch = useDispatch();
    return (
        <div className="relative pb-4">
            <div>
                {sliderData.map((item, index) => {
                    return (
                        <div key={item.id} className={parseInt(item.id) === slideIndex
                            ? "opacity-100 duration-700 ease-in-out scale-100"
                            : "opacity-0 duration-700 ease-in-out scale-75"}>
                            <div className="image">
                                {parseInt(item.id) === slideIndex &&
                                    <img src={item.img} alt="" className="h-[800px] bg-white w-full object-cover" />
                                }
                            </div>
                            <div className="absolute top-1/2 transform -translate-y-1/2 mx-auto px-8 md:px-20 lg:px-40 w-full">
                                <p className="font-bold font-body text-2xl mb-4">Trade-In-Offer</p>
                                <p className="text-white w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] mb-4 text-4xl font-inter font-bold tracking-normal leading-1">
                                    {parseInt(item.id) === slideIndex && item.text}
                                </p>
                                <p className=" text-gray-700 mb-8">Save more with coupons & up to 70% off!</p>
                                <div className="hero mb-4">
                                    <button>Shop Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex absolute bottom-10 left-1/2 transform -translate-x-1/2">
                {
                    sliderData.map((dot, index) => {
                        return (
                            <div className="mr-4" key={index}>
                                <div className={index === slideIndex
                                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                                    : "bg-white rounded-full p-4 cursor-pointer"
                                }
                                    onClick={() => dispatch(dotSlide(index))}></div>
                            </div>
                        )
                    })
                }
            </div>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white rounded-full p-2 hover:bg-green-300"
                onClick={() => dispatch(nextSlide(slideIndex + 1))}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
            </button>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white rounded-full p-2 hover:bg-green-300"
                onClick={() => dispatch(prevSlide(slideIndex - 1))}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
        </div>
    );
    
};

export default Slider;
