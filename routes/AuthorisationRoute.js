import { Router } from "express";
import Login from "../authentification/Login.js";

const authorisationRoute = Router();

authorisationRoute.post("/", Login);

export default authorisationRoute;