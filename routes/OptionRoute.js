import express from "express";
//import { body } from "express-validator";
import { getOptions, addOption, deleteOption, getOption, updateOption } from "../controllers/optionController.js";

const optionRoute = express.Router();


optionRoute.get("/", getOptions)
            .get("/:id", getOption)
              .post("/", addOption)
              .delete("/:id", deleteOption)
              .put("/:id", updateOption);

export default optionRoute;
