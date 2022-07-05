import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { BookingDTO } from "../dto/BookingDTO";

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#E5E5E5",
  color: "#58727F",
}));

const BookingListItem = ({ booking }: { booking: BookingDTO }) => {
  return (
    <GridContainer container>
      <Grid item>{booking.bookingType}</Grid>
      <Grid item>{booking.expiresAt}</Grid>
    </GridContainer>
  );
};

export default BookingListItem;
