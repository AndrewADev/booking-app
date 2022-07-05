const {VehiclesService} = require('./VehiclesService');
import seedVehicles from '../mock-data/Vehicles';
import { v4 as uuidv4 } from "uuid";

// This is hard-coded, ergo more of an integration test now
import { connectToDatabase } from '../database';
import { Db } from "mongodb";

describe('VehiclesService', () => {
    let dbClient: Db;
    let close: () => void;

    beforeAll(async () => {
        const config = await connectToDatabase("mongodb://localhost:27017", `booking-app-${uuidv4()}`)
        dbClient = config.db;
        close = config.close;
    })

    afterAll(async () => {
        // This is needed or Jest whines about open connections
        close && close();
    })

    it('creates vehicles', async () => {
        const sut = new VehiclesService(dbClient);

        // TODO: better init
        const vehicle = {
            make: 'VW',
            modelYear: 2021,
        };
        const inserted = await sut.createVehicle(vehicle);
        expect(inserted._id).toBeTruthy()
    })

    it('bulk inserts vehicles', async () => {
        const sut = new VehiclesService(dbClient);

        const vehiclesBefore = await sut.getAll();

        const inserted = await sut.insertBulk(seedVehicles);

        expect(inserted).toBe(3);

        const allVehicles = await sut.getAll();

        expect(allVehicles).toHaveLength(vehiclesBefore.length + seedVehicles.length);
    })
});