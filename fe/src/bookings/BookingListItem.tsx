import React from "react";
import Grid from "@mui/material/Grid";
import { BookingDTO } from "../dto/BookingDTO";
import BaListItem from "../ui/BaListItem";
import Button from "@mui/material/Button";
import { useDeleteBookingMutation } from "../api/bookingsApi";

const BookingListItem = ({ booking }: { booking: BookingDTO }) => {
  const [deleteBooking] = useDeleteBookingMutation();

  const onClick = () => {
    deleteBooking(booking._id);
  };

  return (
    <BaListItem container>
      <Grid item>{booking.bookingType}</Grid>
      <Grid item>{booking.expiresAt}</Grid>
      <Grid item>
        <Button onClick={onClick}>Delete</Button>
      </Grid>
    </BaListItem>
  );
};

export default BookingListItem;
