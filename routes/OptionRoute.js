import express from "express";
//import { body } from "express-validator";
import { getOptions, addOption, deleteOption } from "../controllers/optionController.js";

const optionRoute = express.Router();


optionRoute.get("/", getOptions)
              .post("/", addOption)
              .delete("/:id", deleteOption);

export default optionRoute;
