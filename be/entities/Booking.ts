import {ObjectId} from 'mongodb';

export enum BookingType {
    Vehicle = "Vehicle",
}

export type Booking = {
  _id: ObjectId;
  bookingType: BookingType;
  expiresAt: string;
  bookedResourceId: string;
  userId: string;
};
