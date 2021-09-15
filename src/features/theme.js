import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = '';

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        color: initialStateValue,
    },
    reducers: {
        changeColor: (state, { payload }) => {
            state.color = payload;
        },
    },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
