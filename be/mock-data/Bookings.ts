import { BookingType } from "../entities/Booking";
import { mainUserId } from "./Users";
import { minutesInTheFuture } from "./utils";

const seedBookings = [
    {
      make: "VW",
      id: "00011122233a",
      bookingType: BookingType.Vehicle,
      bookedResourceId: "00011122233a",
      expiresAt: minutesInTheFuture(5).toISOString(),
      userId: mainUserId,
    },
  ];
  
  export default seedBookings;