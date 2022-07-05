export enum BookingType {
    Vehicle = "Vehicle",
}

export type BookingDTO = {
  id: string;
  bookingType: BookingType;
  expiresAt: string;
  bookedResourceId: string;
  userId: string;
};