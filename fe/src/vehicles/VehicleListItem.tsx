import React from "react";
import Grid from "@mui/material/Grid";
import BaListItem from "../ui/BaListItem";
import Button from "@mui/material/Button";
import { useBookVehicleMutation } from "../api/vehiclesApi";

const VehicleListItem = ({ vehicle }: { vehicle: any }) => {
  const [ bookVehicle ] = useBookVehicleMutation();

  const onClick = () => {
    bookVehicle(vehicle._id);
  }
  
  return (
    <BaListItem container>
      <Grid item>{vehicle.modelYear}</Grid>
      <Grid item>{vehicle.make}</Grid>
      <Grid item>
        <Button variant="outlined"  onClick={onClick}>Book</Button>
      </Grid>
    </BaListItem>
  );
};

export default VehicleListItem;
