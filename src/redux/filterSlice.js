import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        addFilter: {
            reducer(state, action) {
                return action.payload;
            },
        },
    },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;