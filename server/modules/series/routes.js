import { Router } from "express";

import { listSeries, addSeries } from "./controller.js";

export default () => {
  const router = Router();

  router.get("/list", listSeries);
  router.post("/add", addSeries);

  return router;
};