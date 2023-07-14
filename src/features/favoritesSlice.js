import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('favorites') || '[]');

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorite(state, action) {
            const id = action.payload.id;
            if (!state.includes(id)) {
                state.push(id);
            }
            localStorage.setItem('favorites', JSON.stringify(state));
        },
        removeToFavorite(state, action) {
            const id = action.payload.id;
            const index = state.indexOf(id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('favorites', JSON.stringify(state));
        }
    }
});

export const { addToFavorite, removeToFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;