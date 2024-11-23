import { Router } from "express";
import Login from "../authentification/Login.js";

const authorisationRoute = Router();

authorisationRoute.post("/login", Login);

export default authorisationRoute;