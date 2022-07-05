import express from "express";

const router = express.Router();

router.get("/", async (req: any, res: any) => {
  const vehicles = await req.app.locals.vehiclesService.getAll();
  res.send(vehicles);
});

export default router;
