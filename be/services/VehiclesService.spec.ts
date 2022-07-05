const {VehiclesService} = require('./VehiclesService');

test('creates vehicles', () => {
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