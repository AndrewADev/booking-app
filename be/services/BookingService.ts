import { Db } from "mongodb";

import { Booking } from "../entities/Booking";

export class BookingService {
  dbClient: Db;

  constructor(db: Db) {
    this.dbClient = db;
  }

  async bookResource(entity: Booking) {
    const bookings = this.dbClient.collection("bookings");
    await bookings.insertOne(entity);
    return entity;
  }

  async insertBulk(entities: Booking[]) {
    const bookings = this.dbClient.collection("bookings");
    const inserted = await bookings.insertMany(entities);
    return inserted.insertedCount;
  }

  async getAllBookingsForUser(userId: string) {
    const bookings = this.dbClient.collection("bookings");

    return bookings.find({ userId: userId}).toArray();
  }

  async getTotalBookingsCount() {
    const bookings = this.dbClient.collection("bookings");

    return bookings.countDocuments()
  }
}
