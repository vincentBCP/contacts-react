import { configureStore } from '@reduxjs/toolkit';

import appReducer from './app.reducer';

const store = configureStore({
    reducer: {
        app: appReducer
    }
});

export default store;