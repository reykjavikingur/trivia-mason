import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesReducer,
    },
});
