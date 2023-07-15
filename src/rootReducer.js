import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice.js';
import colorReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice';
import productReducer from './features/productSlice';
import favoritesReducer from './features/favoritesSlice.js';
import cartReducer from './features/cartSlice';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
    goods: goodsReducer,
    product: productReducer,
    favorites: favoritesReducer,
    cart: cartReducer
});

export default rootReducer;