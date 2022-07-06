import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BookingDTO } from "../dto/BookingDTO";
import { apiBaseUrl } from "../constants";

export const bookingsApi = createApi({
  reducerPath: "bookings",
  tagTypes: ["Bookings"],
  baseQuery: fetchBaseQuery({
    baseUrl: apiBaseUrl,
  }),
  endpoints: (builder) => ({
    getUserBookings: builder.query<BookingDTO[], void>({
      query: () => "/bookings",
      providesTags: (result) =>
        result
          ? [
              ...result.map(
                ({ _id }: BookingDTO) =>
                  ({ type: "Bookings", id: _id } as const)
              ),
              { type: "Bookings", id: "LIST" },
            ]
          : [{ type: "Bookings", id: "LIST" }],
    }),
    deleteBooking: builder.mutation<void, string>({
      query: (id: string) => {
        return {
          url: `/bookings/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, error, id) => [{ type: "Bookings", id }],
    }),
  }),
});

export const { useGetUserBookingsQuery, useDeleteBookingMutation } = bookingsApi;
