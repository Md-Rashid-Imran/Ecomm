/* eslint-disable react/prop-types */
export const ProductCard = ({ product }) => {

  return (
    <div className="w-80 h-full flex flex-col items-center justify-center border p-5 bg-white rounded-lg shadow-lg transition duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 object-contain border rounded-lg"
      />
      <h2 className="text-lg font-bold mt-3 text-gray-800 text-center">
        {product.title}
      </h2>
      <p className="text-md font-semibold text-orange-600 mt-1">
        Rating: {product.rating.rate}
      </p>
      <p className="text-lg font-bold text-blue-700 mt-1">₹{product.price}</p>
      
    </div>
  );
};

export const HOF = (ProductCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="bg-black text-white absolute z-10 mx-1 my-1 px-4 py-1 rounded-md">Best Seller</span>
        <ProductCard {...props}/>
      </div>
    );
  };
};
