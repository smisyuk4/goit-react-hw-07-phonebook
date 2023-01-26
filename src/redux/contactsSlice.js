import { createSlice } from "@reduxjs/toolkit";

const CONTACTS = 'contacts'

const contactsSlice = createSlice({
    name: CONTACTS,
    initialState: [], 
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);                
            },          
        },
        removeContact: {
            reducer(state, action) {
                const index = state.findIndex(task => task.id === action.payload);
                state.splice(index, 1);                
            },            
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;