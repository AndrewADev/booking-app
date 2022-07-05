export enum BookingType {
    Vehicle = "Vehicle",
}

export type BookingDTO = {
  _id: string;
  bookingType: BookingType;
  expiresAt: string;
  bookedResourceId: string;
  userId: string;
};