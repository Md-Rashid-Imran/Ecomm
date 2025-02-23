import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../Store/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch();
    const clearCartItemHandler = () => {
        dispatch(clearItems());
    }
    return (
        <div className='max-w-5xl mx-auto mt-10'>
            <div className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Cart - ({cartItems.length})</h1>
                <button onClick={clearCartItemHandler} className="bg-black text-white rounded-md px-4 py-1">Clear Cart</button>
            </div>
            {
                cartItems.map((item) => (
                    <div className="w-80 h-full border p-5 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-200 flex flex-col items-center justify-center border p-5 bg-white rounded-lg">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-40 h-40 object-contain border rounded-lg"
                            />
                            <h2 className="text-lg font-bold mt-3 text-gray-800 text-center">
                                {item.title}
                            </h2>
                            <p className="text-md font-semibold text-orange-600 mt-1">
                                Rating: {item.rating.rate}
                            </p>
                            <p className="text-lg font-bold text-blue-700 mt-1">₹{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart