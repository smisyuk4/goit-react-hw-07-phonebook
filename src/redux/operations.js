import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = "https://63d2f5fc4abff888341631be.mockapi.io/phonebook";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get("/contacts");
      // При успішному запиті повертаємо проміс із даними
      return data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);





// GET = https://63d2f5fc4abff888341631be.mockapi.io/phonebook/contacts
// GET = https://63d2f5fc4abff888341631be.mockapi.io/phonebook/contacts/id

// POST = https://63d2f5fc4abff888341631be.mockapi.io/phonebook/contacts

// PUT = https://63d2f5fc4abff888341631be.mockapi.io/phonebook/contacts/id

// DELETE = https://63d2f5fc4abff888341631be.mockapi.io/phonebook/contacts/id



// const contactsApi = axios.create({
//   baseURL: 'https://63d2f5fc4abff888341631be.mockapi.io/phonebook',
// });

// export const fetchContacts = async (params = {}) => async dispatch => {
//     try{
//         // Індикатор завантаження
//         dispatch(fetchingInProgress());
//         // HTTP-запит
//         const { data } = await contactsApi.get('/contacts', params);
//         // Обробка даних
//         dispatch(fetchingSuccess(data));

//     } catch (e) {
//         // Обробка помилки
//         dispatch(fetchingError(e.message));
//     }
// };