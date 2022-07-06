import express from "express";
import { BookingType } from "../entities/Booking";
import { mainUserId } from "../mock-data/Users";

const router = express.Router();

router.get("/", async (req: any, res: any) => {
  const vehicles = await req.app.locals.vehiclesService.getAll();
  res.send(vehicles);
});

router.post("/:id/book", async (req: any, res: any) => {
    
    const booking = {
        bookingType: BookingType.Vehicle,
        // 10 minutes for now
        // TODO: probably should be rcvd via payload
        expiresAt: new Date(new Date().getTime() + 10 * 60000),
        bookedResourceId: req.params.id,
        // HACK: should be retrieved from Auth'ed User
        userId: mainUserId,
    }

    await req.app.locals.bookingService.bookResource(booking);
    
    res.status(201);
    res.send(booking);
})

export default router;
