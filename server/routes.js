import { Router } from "express";
import moviesRoutes from "./modules/movies/routes.js";
import seriesRoutes from "./modules/series/routes.js";

const routes = () => {
  const router = Router();

  router.use("/movie", moviesRoutes());
  router.use("/series", seriesRoutes());

  return router;
};

export default routes;