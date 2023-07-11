import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from './features/navigationSlice.js';
import colorReducer from './features/colorSlice';
import goodsReducer from './features/goodsSlice';

const rootReducer = combineReducers({
    navigation: navigationReducer,
    color: colorReducer,
    goods: goodsReducer,
});

export default rootReducer;