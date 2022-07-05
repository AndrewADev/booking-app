import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BookingDTO } from '../dto/BookingDTO';
import { apiBaseUrl } from '../constants';

export const bookingsApi = createApi({
    reducerPath: 'bookings',
    baseQuery: fetchBaseQuery({ 
      baseUrl: apiBaseUrl,
    }),
    endpoints: (builder) => ({
      getUserBookings: builder.query<BookingDTO, void>({
        query: () => '/bookings'
      })
    })
  });

export const { useGetUserBookingsQuery } = bookingsApi;