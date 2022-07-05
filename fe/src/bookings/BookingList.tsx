import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import { useGetUserBookingsQuery } from "../api/bookingsApi";
import BookingListItem from "./BookingListItem";

const StyledPaper = styled(Paper)(({ theme }) => ({
  color: "#E5E5E5",
  backgroundColor: "#58727F",
}));

const BookingList = () => {
  const { data } = useGetUserBookingsQuery();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <StyledPaper>
          <Typography variant="h4">Bookings</Typography>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((vehicle, idx) => (
              <BookingListItem booking={vehicle} key={`entry-${idx}`} />
            ))
          ) : (
            <Typography variant="body1" gutterBottom>
              No bookings available - check back later!
            </Typography>
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default BookingList;
