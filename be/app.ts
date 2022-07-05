import express from "express";
import cors from "cors";
import { VehiclesService } from "./services/VehiclesService";
import { loadBookingsData, loadVehiclesData } from "./utils/loadMockData";
import { BookingService } from "./services/BookingService";
import { mainUserId } from "./mock-data/Users";

const app = express();

// TODO: good place for config
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const port = 3333;

// TODO: better separation/setup

/**
 * Services
 */
const vehiclesService = new VehiclesService();
const bookingService = new BookingService();

/**
 * Data load
 */
loadVehiclesData(vehiclesService);
loadBookingsData(bookingService);

app.get("/api/vehicles", (req, res) => {
  const vehicles = vehiclesService.getAll();
  res.send(vehicles);
});

app.get("/api/bookings", (req, res) => {
    // HACK: should be retrieved from Auth
    const bookings = bookingService.getAllBookingsForUser(mainUserId);
    res.send(bookings);
})

app.listen(port, () => {
  console.log("Listening on http://localhost:", port);
});
