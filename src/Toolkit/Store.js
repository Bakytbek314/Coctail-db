import { configureStore } from '@reduxjs/toolkit';
import coctailSlice from './Slice/CoctailSlice';

const store = configureStore({
    reducer: {
        products: coctailSlice
    }
})

export default store;
