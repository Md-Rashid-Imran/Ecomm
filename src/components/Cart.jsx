import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems } from '../Store/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    const dispatch = useDispatch();
    const clearCartItemHandler = () => {
        dispatch(clearItems());
    }
    return cartItems.length===0?(
        
        <div className="flex items-center justify-center w-full h-screen flex-col">
            <h1 className='text-3xl font-bold text-center '>CART IS <span className='text-red-600'>EMPTY</span> , ADD ITEMS</h1>
            <br />
            <Link to="/">
            <span className='text-3xl font-bold text-center text-blue-600'>View Products</span>
            </Link>
        
        </div>
        
    ):(
        (
            <div className="w-full flex items-center flex-col my-5">
                <div className="flex  flex-wrap gap-5 m-4">
                    <h1 className='font-bold text-xl'>Cart - ({cartItems.length})</h1>
                    <button onClick={clearCartItemHandler} className="bg-black text-white rounded-md px-4 py-1">Clear Cart</button>
                </div>
               
    
                <div className="flex flex-wrap h-full w-full justify-evenly items-center">
                    {
                        cartItems.map((item) => (
                            <div className=" flex items-center flex-col justify-center border p-3  rounded-lg m-2 h-80 w-90">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-30 h-30 object-contain border rounded-lg"
                                />
                                <h2 className="text-lg font-bold mt-3 text-gray-800 text-center">
                                    {item.title}
                                </h2>
                                <p className="text-md font-semibold text-orange-600 mt-1">
                                    Rating: {item.rating.rate}
                                </p>
                                <p className="text-lg font-bold text-blue-700 mt-1">₹{item.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    )}


export default Cart