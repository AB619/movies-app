import { Router } from "express";

import { listSeries } from "./controller.js";

export default () => {
  const router = Router();

  router.get("/list", listSeries);

  return router;
};