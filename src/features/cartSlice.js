import { createSlice } from "@reduxjs/toolkit";

const cartItems = JSON.parse(localStorage.getItem('cart') || "[]");

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems,
        countItems: cartItems.length,
    },
    reducers: {
        addToCart(state, actions) {
            const { id, color, size, count } = actions.payload;
            const item = state.cartItems.find(
                item => item.id === id && item.color === color && item.size === size
            );

            if (item) {
                item.count = count
            } else {
                state.cartItems.push({ id, color, size, count })
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            state.countItems = state.cartItems.length;
        },
        removeFromCart(state, actions) {
            const { id, color, size } = actions.payload;
            const itemIndex = state.cartItems.findIndex(
                item => item.id === id && item.color === color && item.size === size
            );
            if (itemIndex !== -1) {
                state.cartItems.splice(itemIndex, 1);
            }

            localStorage.setItem('cart', JSON.stringify(state.cartItems));
            state.countItems = state.cartItems.length;
        }
    },


});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;