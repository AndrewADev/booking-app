const {VehiclesService} = require('./VehiclesService');
import seedVehicles from '../mock-data/Vehicles';


describe('VehiclesService', () => {
    it('creates vehicles', () => {
        const sut = new VehiclesService();

        // TODO: better init
        const vehicle = {
            make: 'VW',
            modelYear: 2021,
            id: ''
        };
        expect(vehicle.id).toBeFalsy()
        const inserted = sut.createVehicle(vehicle);
        expect(inserted.id).toBeTruthy()
    })

    it('bulk inserts vehicles', () => {
        const sut = new VehiclesService();

        const inserted = sut.insertBulk(seedVehicles);

        expect(inserted).toBe(3);

        const allVehicles = sut.getAll();

        expect(allVehicles).toHaveLength(seedVehicles.length);
    })
});