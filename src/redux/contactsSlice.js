import { createSlice } from "@reduxjs/toolkit";

const CONTACTS = 'contacts'

const INITIAL_CONTACTS = [
    { id: 'id-1', name: 'Тарас Шевченко', number: '459-12-56' },
    { id: 'id-2', name: 'Іван Франко', number: '443-89-12'},
    { id: 'id-3', name: 'Леся Українка', number: '645-17-79'},
    { id: 'id-4', name: 'Григорій Сковорода', number: '227-88-33' },
    { id: 'id-5', name: 'Ліна Костенко', number: '4567-78-26' },
    { id: 'id-6', name: 'Валер’ян Підмогильний', number: '527272-91-00' },
    { id: 'id-7', name: 'Михайло Коцюбинський', number: '7778-99-55' },
    { id: 'id-8', name: 'Jack Richer', number: '55-99-55' },
    { id: 'id-9', name: 'Batman', number: '88-99-55' },
    { id: 'id-10', name: 'Spiderman', number: '36363-99-55' },
  ]

const contactsSlice = createSlice({
    name: CONTACTS,
    initialState: JSON.parse(localStorage.getItem(CONTACTS)) ?? INITIAL_CONTACTS, 
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
                localStorage.setItem(CONTACTS, JSON.stringify(state))
            },          
        },
        removeContact: {
            reducer(state, action) {
                const index = state.findIndex(task => task.id === action.payload);
                state.splice(index, 1);
                localStorage.setItem(CONTACTS, JSON.stringify(state))
            },            
        },
    },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;