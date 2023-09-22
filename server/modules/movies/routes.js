import { Router } from "express";

import { listMovies, addMovie } from "./controller.js";

export default () => {
  const router = Router();

  router.get("/list", listMovies);
  router.post("/add", addMovie);

  return router;
};