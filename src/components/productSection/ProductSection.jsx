import React from "react";
import { storeData } from "../../assets/data/dummyData";
import ProductSectionItem from "./ProductSectionItem";
const ProductSection = () => {
    return (
        <div>
            <div className="bg-black p-2 w-[50%] mx-auto rounded-md mt-7">
                <h2 className="text-red-600 text-center text-lg font-inter font-bold tracking-normal leading-none">
                    Summer T-shirt Sale 30%
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center py-8 gap-8 mx-auto max-w-full">
                {storeData.slice(0, 8).map((item, index) => {
                    return (
                        <div key={index}>
                            <ProductSectionItem
                                id={item.id}
                                name={item.name}
                                img={item.img}
                                text={item.text}
                                price={item.price}
                                size={item.size}
                                color={item.color}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductSection;
