import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { fetchCamperById, fetchCampers, fetchFilteredCampers } from './campersOps';
import { RootState } from '../store';

import { ICamper } from '../../components/Camper/Camper.types';

export interface IApiError {
  message: string;
}

interface IInitialState {
  items: ICamper[];
  favorites: ICamper[];
  isFiltered: boolean;
  visibleCampers: number;
  camper: ICamper | null;
  loading: boolean;
  error: null | string;
}

const initialState: IInitialState = {
  items: [],
  favorites: [],
  isFiltered: false,
  visibleCampers: 4,
  camper: null,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      const index = state.favorites.findIndex(({ id }) => id === payload);

      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        const camperToAdd = state.items.find(({ id }) => id === payload);
        if (camperToAdd) {
          state.favorites.push(camperToAdd);
        }
      }
    },
    setVisibleCampers: (state, { payload }) => {
      state.visibleCampers = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isFiltered = true;
        state.items = payload;
      })
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.camper = payload;
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
          state.items = [];
          state.error = action.payload.message;
        }
      ),
});

const persistConfig = {
  key: 'favoritesCampers',
  storage,
  whitelist: ['favorites', 'visibleCampers', 'camper'],
};

export const { addToFavorites, setVisibleCampers } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;

export const campersPersistReducer = persistReducer(persistConfig, campersReducer);

export const selectCampers = (state: RootState) => state.campers.items;
export const selectFavorites = (state: RootState) => state.campers.favorites;
export const selectLoading = (state: RootState) => state.campers.loading;
export const selectVisibleCampers = (state: RootState) => state.campers.visibleCampers;
export const selectCamper = (state: RootState) => state.campers.camper;
export const selectFiltered = (state: RootState) => state.campers.isFiltered;
