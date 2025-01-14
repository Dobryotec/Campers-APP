import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';
import { RootState } from './store';

import { ICamper } from '../components/Camper/Camper.types';

export interface IApiError {
  message: string;
}

interface IInitialState {
  items: ICamper[];
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  items: [],
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addMatcher(
        ({ type }) => type.endsWith('/pending'),
        state => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action): action is PayloadAction<IApiError> => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload.message;
        }
      ),
});

export const campersReducer = campersSlice.reducer;
export const selectCampers = (state: RootState) => state.campers.items;
