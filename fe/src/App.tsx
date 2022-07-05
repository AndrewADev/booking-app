import React from 'react';
import { useGetUserBookingsQuery } from './api/bookingsApi';
import './App.css';
import BookingList from './bookings/BookingList';
import VehicleList from './vehicles/VehicleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Booking App
        </h1>
      </header>
      <VehicleList />
      <BookingList />
    </div>
  );
}

export default App;
