import React from "react";
import Grid from "@mui/material/Grid";
import BaListItem from "../ui/BaListItem";

const VehicleListItem = ({ vehicle }: { vehicle: any }) => {
  return (
    <BaListItem container>
      <Grid item>{vehicle.make}</Grid>
      <Grid item>{vehicle.modelYear}</Grid>
    </BaListItem>
  );
};

export default VehicleListItem;
