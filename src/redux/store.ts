import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { campersPersistReducer } from './campers/campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
