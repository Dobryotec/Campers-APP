import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const {
      data: { items },
    } = await axios('/campers');
    console.log(items);

    return items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    }
    return rejectWithValue({ message: 'Something went wrong:(' });
  }
});
