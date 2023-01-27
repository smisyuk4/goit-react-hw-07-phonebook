import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact } from "./operations"

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items:[],
        isLoading: false,
        error: null,
    }, 
    extraReducers: {
        // GET
        [fetchContacts.pending](state, action) {
            state.isLoading = true; 
        },
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload
        },
        [fetchContacts.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        // PUSH
        [addContact.pending](state) {
            state.isLoading = true;
        },
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [addContact.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;