import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const GridContainer = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#E5E5E5",
  color: "#58727F",
}));

const VehicleListItem = ({ vehicle }: { vehicle: any }) => {
  return (
    <GridContainer container>
      <Grid item>{vehicle.make}</Grid>
      <Grid item>{vehicle.modelYear}</Grid>
    </GridContainer>
  );
};

export default VehicleListItem;
