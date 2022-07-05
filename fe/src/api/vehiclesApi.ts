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
      })
    })
  });

export const { useGetVehiclesQuery } = vehiclesApi;