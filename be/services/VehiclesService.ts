import { v4 as uuidv4 } from "uuid";

import { Vehicle } from "../entities/Vehicle";

export class VehiclesService {
  constructor() {}

  // TODO: needs persistence
  vehicles: Array<Vehicle> = [];

  createVehicle(entity: Vehicle) {
    // TODO: replace with actual crud logic
    entity.id = uuidv4();

    this.vehicles.push(entity);

    return entity;
  }

  insertBulk(entities: Vehicle[]) {
    this.vehicles = this.vehicles.concat(entities);
    return entities.length;
  }

  getAll() {
    return this.vehicles;
  }
}
