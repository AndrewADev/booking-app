export enum BookingType {
    Vehicle = "Vehicle",
}

export type Booking = {
  id: string;
  bookingType: BookingType;
  expiresAt: string;
  bookedResourceId: string;
  userId: string;
};
