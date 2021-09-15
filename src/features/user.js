import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
    name: '',
    email: '',
    age: 0,
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialStateValue,
    },
    reducers: {
        login: (state, { payload }) => {
            state.user = payload;
        },
        logout: (state) => {
            state.user = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
