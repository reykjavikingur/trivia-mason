import {createSlice} from "@reduxjs/toolkit";
import {getPlayerScores, setPlayerScores} from "./scoringAPI";

const initialState = {
    playerScores: getPlayerScores() || {},
};

export const scoringSlice = createSlice({
    name: "scoring",
    initialState,
    reducers: {

        addPlayer: (state, action) => {
            const name = String(action.payload);
            if (!name) {
                throw new Error("cannot add player with empty name");
            }
            if (state.playerScores.hasOwnProperty(name)) {
                throw new Error("cannot add player with same name as existing player");
            }
            state.playerScores[name] = 0;

            setPlayerScores(state.playerScores);
        },

        removePlayer: (state, action) => {
            const name = String(action.payload);
            if (!state.playerScores.hasOwnProperty(name)) {
                throw new Error("cannot find player to remove");
            }
            delete state.playerScores[name];

            setPlayerScores(state.playerScores);
        },

        setPlayerScore: (state, action) => {
            const { name, score } = action.payload;
            if (!state.playerScores.hasOwnProperty(name)) {
                throw new Error("cannot find player to set score for");
            }
            state.playerScores[name] = score;

            setPlayerScores(state.playerScores);
        },
    },
});

export const { addPlayer, removePlayer, setPlayerScore } = scoringSlice.actions;

export const selectPlayerScores = (state) => state.scoring.playerScores;

export default scoringSlice.reducer;
