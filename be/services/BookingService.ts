import { v4 as uuidv4 } from "uuid";

import { Booking } from "../entities/Booking";

export class BookingService {
  constructor() {}

  // TODO: needs persistence
  bookings: Array<Booking> = [];

  bookResource(entity: Booking) {
    // TODO: replace with actual crud logic
    entity.id = uuidv4();

    this.bookings.push(entity);

    return entity;
  }

  insertBulk(entities: Booking[]) {
    this.bookings = this.bookings.concat(entities);
    return entities.length;
  }

  getAllBookingsForUser(userId: string) {
    return this.bookings.filter(booking => booking.userId === userId);
  }

  getTotalBookingsCount() {
    return this.bookings.length;
  }
}
