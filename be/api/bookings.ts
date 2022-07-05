import express from "express";
import { mainUserId } from "../mock-data/Users";

const router = express.Router();

router.get("/", async (req, res) => {
  const bookings = await req.app.locals.bookingService.getAllBookingsForUser(
    // HACK: should be retrieved from Auth'ed User
    mainUserId
  );
  res.send(bookings);
});

export default router;
