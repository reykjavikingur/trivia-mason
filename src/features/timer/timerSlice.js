import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {delay} from "./timerAPI";

const initialState = {

    /**
     * countdownSeconds is the number of seconds that the timer will last after being started
     */
    countdownSeconds: 0,

    /**
     * Whether the timer is actively counting down.
     */
    countingDown: false,

};

export const nextTimer = createAsyncThunk(
    "timer/next",
    async (_, { getState, dispatch }) => {
        await delay(1);
        const state = getState();
        if (state.timer.countingDown) {
            dispatch(nextTimer());
        }
    },
)

export const startTimer = createAsyncThunk(
    "timer/start",
    async (_, { getState, dispatch }) => {
        await delay(1);
        const state = getState();
        if (state.timer.countingDown) {
            dispatch(nextTimer());
        }
    },
);

export const timerSlice = createSlice({

    name: "timer",

    initialState,

    reducers: {

        setTimer: (state, action) => {
            const n = parseInt(action.payload);
            if (!isNaN(n) && n >= 0) {
                state.countdownSeconds = n;
            }
            else {
                console.error("invalid countdownSeconds");
            }
        },

        clearTimer: (state) => {
            state.countingDown = false;
            state.countdownSeconds = 0;
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(startTimer.pending, (state, action) => {
                if (state.countdownSeconds > 0) {
                    state.countingDown = true;
                    state.countdownSeconds--;
                }
            })
            .addCase(nextTimer.pending, (state) => {
                if (state.countingDown) {
                    if (state.countdownSeconds > 0) {
                        state.countdownSeconds--;
                    }
                    else {
                        state.countingDown = false;
                    }
                }
            })
        ;
    },
});

export const { setTimer, clearTimer } = timerSlice.actions;

export const selectCountdownSeconds = (state) => state.timer.countdownSeconds;

export const selectCountingDown = (state) => state.timer.countingDown;

export default timerSlice.reducer;
