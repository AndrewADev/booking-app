import { VehiclesService } from "../services/VehiclesService";
import seedVehicles from "../mock-data/Vehicles";

export function loadVehiclesData(vehiclesService: VehiclesService) {
  // A quick, but imperfect way of doing this only once
  // other methods may involve breaking this out into a
  // command (since likely only needed when standing up
  // a new DB anyway)
  //
  // This also has the potential to scale quite terribly
  // (especially since we really only want an aggregate count)
  // TODO: consider use of some type of getCount method here
  const allVehicles = vehiclesService.getAll();

  if (allVehicles.length == 0) {
    const inserted = vehiclesService.insertBulk(seedVehicles);
    console.info("Seeded Vehicles");
  } else {
    console.info("Vehicles already present in DB. Not loading");
  }
}
