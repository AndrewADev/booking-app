import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { VehicleDTO } from '../dto/VehicleDTO';
import { apiBaseUrl } from '../constants';

export const vehiclesApi = createApi({
    reducerPath: 'vehicles',
    baseQuery: fetchBaseQuery({ 
      baseUrl: apiBaseUrl,
    }),
    endpoints: (builder) => ({
      getVehicles: builder.query<VehicleDTO, void>({
        query: () => '/vehicles'
      }),
      bookVehicle: builder.mutation<void, string>({
        query: (id: string) => {
          return {
            url: `/vehicles/${id}/book`,
            method: 'POST'
          }
        },
      })
    })
  });

export const { useGetVehiclesQuery,useBookVehicleMutation } = vehiclesApi;