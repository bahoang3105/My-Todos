import { configureStore } from '@reduxjs/toolkit';
import listTaskReducer from '../features/listTask/listTaskSlice.js';

export default configureStore({
    reducer: {
        listTask: listTaskReducer
    }
});