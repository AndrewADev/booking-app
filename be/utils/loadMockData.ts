import { VehiclesService } from "../services/VehiclesService";
import seedVehicles from "../mock-data/Vehicles";
import seedBookings from "../mock-data/Bookings";
import { BookingService } from "../services/BookingService";

export async function loadVehiclesData(vehiclesService: VehiclesService) {
  // A quick, but imperfect way of doing this only once
  // other methods may involve breaking this out into a
  // command (since likely only needed when standing up
  // a new DB anyway)
  //
  // This also has the potential to scale quite terribly
  // (especially since we really only want an aggregate count)
  // TODO: consider use of some type of getCount method here
  const allVehicles = await vehiclesService.getAll();

  if (allVehicles.length == 0) {
    const inserted = await vehiclesService.insertBulk(seedVehicles);
    console.info(`Seeded ${inserted} Vehicles`);
  } else {
    console.info("Vehicles already present in DB. Not loading");
  }
}

export function loadBookingsData(bookingService: BookingService) {
  // A quick, but imperfect way of doing this only once
  // other methods may involve breaking this out into a
  // command (since likely only needed when standing up
  // a new DB anyway)
  const count = bookingService.getTotalBookingsCount();

  if (count == 0) {
    const inserted = bookingService.insertBulk(seedBookings);
    console.info(`Seeded ${inserted} Bookings`);
  } else {
    console.info("Bookings already present in DB. Not loading");
  }
}
