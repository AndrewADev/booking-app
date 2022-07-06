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

router.delete("/:id", async (req, res) => {
  await req.app.locals.bookingService.deleteById(req.params.id);
  res.status(204);
});

export default router;
