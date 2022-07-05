import React from 'react';
import logo from './logo.svg';
import './App.css';
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
    </div>
  );
}

export default App;
