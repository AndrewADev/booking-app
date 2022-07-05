import express from 'express';
import { VehiclesService } from './services/VehiclesService';

const app = express();

const port = 3333;

// TODO: better separation/setup

const vehiclesService = new VehiclesService();

app.get('/api/vehicles', (req, res) => {
    const vehicles = vehiclesService.getAll();

    res.send(vehicles);
});

app.listen( port, () => {
    console.log('Listening on http://localhost:', port)
})