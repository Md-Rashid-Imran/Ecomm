import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailSkeleton from "./PostDetailSkeleton"
import useGetSingleProduct from "../Hook/useGetSingleProduct";

const ProductDetails = () => {

    const {productId} = useParams();
    const singleProduct = useGetSingleProduct(productId);
    
    return singleProduct === null ? <ProductDetailSkeleton/> : (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="w-200 flex flex-col items-center justify-center border p-5 bg-white rounded-lg shadow-lg transition duration-300">
                <img 
                src={singleProduct.image} 
                alt={singleProduct.title} 
                className="w-100 h-100 object-contain border rounded-lg" 
                />
                <h2 className="text-lg font-bold mt-3 text-gray-800 text-center">
                    {singleProduct.title}
                </h2>
                <p className="text-md font-semibold text-orange-600 mt-1">
                    Rating: {singleProduct.rating.rate}
                </p>
                <p className="text-lg font-bold text-blue-700 mt-1">₹{singleProduct.price}</p>
                <p className="text-lg font-bold mt-3 text-gray-800 text-center">{singleProduct.description}</p>
            </div>
        </div>
    )
};
export default ProductDetails;