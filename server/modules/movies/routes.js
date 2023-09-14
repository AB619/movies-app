import { Router } from "express";

import { listMovies } from "./controller.js";

export default () => {
  const router = Router();

  router.get("/list", listMovies);

  return router;
};