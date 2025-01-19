import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICamper } from '../../components/Camper/Camper.types';
import { IApiError } from './campersSlice';
import { IParamsFiltering } from '../../components/Filters/Filters.types';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

interface IApiFetchCampersResponse {
  items: ICamper[];
}

export const fetchCampers = createAsyncThunk<ICamper[], void, { rejectValue: IApiError }>(
  'campers/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { items },
      } = await axios<IApiFetchCampersResponse>('/campers');
      return items;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({ message: 'Something went wrong:(' });
    }
  }
);

export const fetchFilteredCampers = createAsyncThunk<
  ICamper[],
  IParamsFiltering,
  { rejectValue: IApiError }
>('campers/fetchFilteredCampers', async (params, { rejectWithValue }) => {
  try {
    const { location, features, vehicle } = params;
    const query = new URLSearchParams({
      location,
      form: vehicle,
    });
    features.forEach(feature => {
      query.append(feature, 'true');
    });
    const {
      data: { items },
    } = await axios<IApiFetchCampersResponse>(`/campers?${query}`);
    return items;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue({ message: error.message });
    }
    return rejectWithValue({ message: 'Something went wrong:(' });
  }
});

export const fetchCamperById = createAsyncThunk<ICamper, string, { rejectValue: IApiError }>(
  'campers/fethCamperById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios<ICamper>(`/campers/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue({ message: error.message });
      }
      return rejectWithValue({ message: 'Something went wrong:(' });
    }
  }
);
