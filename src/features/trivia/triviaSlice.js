import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchChallenges} from "./triviaAPI";

const initialState = {
    challengesLoading: false,
    challenges: null,

};

export const getChallenges = createAsyncThunk(
    "trivia/getChallenges",
    async ({ amount }, { getState }) => {
        const state = getState();
        const options = { amount };
        if (state.categories.chosenId > 0) {
            options.category = state.categories.chosenId;
        }
        return fetchChallenges(options);
    },
)

export const triviaSlice = createSlice({
    name: "trivia",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getChallenges.pending, (state) => {
                state.challengesLoading = true;
            })
            .addCase(getChallenges.fulfilled, (state, action) => {
                state.challengesLoading = false;
                state.challenges = action.payload;
            })
        ;
    },
});

export const selectChallenges = (state) => state.trivia.challenges;

export const selectChallengesLoading = (state) => state.trivia.challengesLoading;

export default triviaSlice.reducer;
