import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useGetVehiclesQuery } from "../api/vehiclesApi";
import { styled } from "@mui/material/styles";
import VehicleListItem from "./VehicleListItem";

const StyledPaper = styled(Paper)(({ theme }) => ({
  color: "#E5E5E5",
  backgroundColor: "#58727F",
}));

const VehicleList = () => {
  const { data } = useGetVehiclesQuery();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={10} md={10} lg={8}>
        <StyledPaper>
          <Typography variant="h4">Vehicles</Typography>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((vehicle, idx) => (
              <VehicleListItem vehicle={vehicle} key={`entry-${idx}`} />
            ))
          ) : (
            <Typography variant="body1" gutterBottom>
              No vehicles available - check back later!
            </Typography>
          )}
        </StyledPaper>
      </Grid>
    </Grid>
  );
};

export default VehicleList;
