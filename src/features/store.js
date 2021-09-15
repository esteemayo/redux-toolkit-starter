import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './theme';
import userReducer from './user';

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
    },
});

export default store;
