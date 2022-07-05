import express from "express";
import cors from "cors";
import { VehiclesService } from "./services/VehiclesService";
import { loadBookingsData, loadVehiclesData } from "./utils/loadMockData";
import { BookingService } from "./services/BookingService";
import { mainUserId } from "./mock-data/Users";
import { connectToDatabase } from "./database";
import { Db } from "mongodb";

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
const onDatabaseConnected = async (db: Db) => {
  app.locals.vehiclesService = new VehiclesService(db);
  app.locals.bookingService = new BookingService(db);

  /**
   * Data load
   */
  await loadVehiclesData(app.locals.vehiclesService);
  await loadBookingsData(app.locals.bookingService);

  app.listen(port, () => {
    console.log("Listening on http://localhost:", port);
  });
};

app.get("/api/vehicles", async (req, res) => {
  const vehicles = await app.locals.vehiclesService.getAll();
  res.send(vehicles);
});

app.get("/api/bookings", async (req, res) => {
  // HACK: should be retrieved from Auth
  const bookings = await app.locals.bookingService.getAllBookingsForUser(mainUserId);
  res.send(bookings);
});

connectToDatabase(
  "mongodb://localhost:27017",
  "booking-app",
  onDatabaseConnected
);
