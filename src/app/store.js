import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import scoringReducer from "../features/scoring/scoringSlice";
import triviaReducer from "../features/trivia/triviaSlice";
import timerReducer from "../features/timer/timerSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        categories: categoriesReducer,
        scoring: scoringReducer,
        trivia: triviaReducer,
        timer: timerReducer,
    },
});
