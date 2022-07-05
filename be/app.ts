import express from "express";
import cors from "cors";
import { VehiclesService } from "./services/VehiclesService";
import { loadBookingsData, loadVehiclesData } from "./utils/loadMockData";
import { BookingService } from "./services/BookingService";
import { connectToDatabase } from "./database";
import { Db } from "mongodb";
import vehicles from "./api/vehicles";
import bookings from "./api/bookings";

const app = express();

// TODO: good place for config
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const port = 3333;
const onDatabaseConnected = async (db: Db) => {
  /**
   * Services
   */
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

app.use("/api/vehicles", vehicles);

app.use("/api/bookings", bookings);

connectToDatabase(
  "mongodb://localhost:27017",
  "booking-app",
  onDatabaseConnected
);
