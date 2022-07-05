import React from "react";
import Grid from "@mui/material/Grid";
import { BookingDTO } from "../dto/BookingDTO";
import BaListItem from "../ui/BaListItem";

const BookingListItem = ({ booking }: { booking: BookingDTO }) => {
  return (
    <BaListItem container>
      <Grid item>{booking.bookingType}</Grid>
      <Grid item>{booking.expiresAt}</Grid>
    </BaListItem>
  );
};

export default BookingListItem;
