import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import triviaReducer from "../features/trivia/triviaSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesReducer,
        trivia: triviaReducer,
    },
});
