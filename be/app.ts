import express from 'express';
import cors from 'cors';
import { VehiclesService } from './services/VehiclesService';

const app = express();

// TODO: good place for config
const corsOptions = {
    origin: 'http://localhost:3000',
}

app.use(cors(corsOptions));

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