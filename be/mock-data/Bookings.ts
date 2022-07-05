import { BookingType } from "../entities/Booking";
import { mainUserId } from "./Users";
import { minutesInTheFuture } from "./utils";
import {ObjectId} from 'mongodb'


const seedBookings = [
    {
      make: "VW",
      _id: new ObjectId("62c4ca568874b43e0579475c"),
      bookingType: BookingType.Vehicle,
      bookedResourceId: "00011122233a",
      expiresAt: minutesInTheFuture(5).toISOString(),
      userId: mainUserId,
    },
  ];
  
  export default seedBookings;