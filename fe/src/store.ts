import { configureStore } from "@reduxjs/toolkit";
import { vehiclesApi } from "./api/vehiclesApi";
import { bookingsApi } from "./api/bookingsApi";

export const store = configureStore({
  reducer: {
    [bookingsApi.reducerPath] : bookingsApi.reducer,
    [vehiclesApi.reducerPath]: vehiclesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([vehiclesApi.middleware, bookingsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
