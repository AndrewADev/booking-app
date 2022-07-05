import { v4 as uuidv4 } from "uuid";
import { Db } from "mongodb";

import { Vehicle } from "../entities/Vehicle";

export class VehiclesService {
  dbClient: Db;

  constructor(db: Db) {
    this.dbClient = db;
  }

  async createVehicle(entity: Vehicle) {
    const vehicles = this.dbClient.collection("vehicles");
    await vehicles.insertOne(entity);
    return entity;
  }

  async insertBulk(entities: Vehicle[]) {
    const vehicles = this.dbClient.collection("vehicles");
    const inserted = await vehicles.insertMany(entities);
    return inserted.insertedCount;
  }

  async getAll() {
    const vehicles = this.dbClient.collection("vehicles");

    return vehicles.find().toArray();
  }
}
