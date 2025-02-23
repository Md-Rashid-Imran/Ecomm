import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ //cartSlice is object which usually contains name, initialState and reducers
    name:'cart',
    initialState:{
        cartItems:[]
    },
    reducers:{ //Reducers are objects which have key-value pairs, key is action and value is reducer/call-back function here 1st key is 'addItems' and it's associated value is '(state, action) => {}'
        addItems: (state, action) => {
            state.cartItems.push(action.payload) //Suppose on pressing the button addItems('name') is called then action.payload = 'name'
        },
        removeItems: (state, action) => {
            state.cartItems.pop();
        },
        clearItems: (state, action) => {
            state.cartItems.length = 0;
        }
    }
});
export const {addItems,removeItems,clearItems} = cartSlice.actions;
export default cartSlice.reducer;