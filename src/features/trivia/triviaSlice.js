import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchChallenges} from "./triviaAPI";

const initialState = {
    challengesLoading: false,
    challenges: null,
    challengeType: "",
    challengeDifficulty: "",
};

export const getChallenges = createAsyncThunk(
    "trivia/getChallenges",
    async ({ amount }, { getState }) => {
        const state = getState();
        const options = { amount };
        if (state.categories.chosenId > 0) {
            options.category = state.categories.chosenId;
        }
        if (state.trivia.challengeType) {
            options.type = state.trivia.challengeType;
        }
        if (state.trivia.challengeDifficulty) {
            options.difficulty = state.trivia.challengeDifficulty;
        }
        return fetchChallenges(options);
    },
);

export const triviaSlice = createSlice({
    name: "trivia",
    initialState,
    reducers: {

        chooseChallengeType: (state, action) => {
            state.challengeType = action.payload;
        },

        chooseChallengeDifficulty: (state, action) => {
            state.challengeDifficulty = action.payload;
        },

    },
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

export const { chooseChallengeDifficulty, chooseChallengeType } = triviaSlice.actions;

export const selectChallenges = (state) => state.trivia.challenges;

export const selectChallengesLoading = (state) => state.trivia.challengesLoading;

export const selectChallengeType = (state) => state.trivia.challengeType;

export const selectChallengeDifficulty = (state) => state.trivia.challengeDifficulty;

export default triviaSlice.reducer;
