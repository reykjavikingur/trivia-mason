import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchCategories} from "./categoriesAPI";

const initialState = {
    loading: false,
    list: null,
    chosenId: -1,
};

export const loadCategories = createAsyncThunk(
    "categories/load",
    async () => {
        const list = await fetchCategories();
        return list;
    },
)

export const categoriesSlice = createSlice({

    name: "categories",

    initialState,

    reducers: {
        chooseCategoryId: (state, action) => {
            state.chosenId = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(loadCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
    },
});

export const { chooseCategoryId } = categoriesSlice.actions;

export const selectCategoriesLoading = (state) => state.categories.loading;

export const selectCategoriesList = (state) => state.categories.list;

export const selectChosenCategoryId = (state) => state.categories.chosenId;

export default categoriesSlice.reducer;
