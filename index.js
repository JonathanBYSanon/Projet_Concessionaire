import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';

import couleurRoutes from "./routes/couleurRoutes.js";
import optionsRoutes from "./routes/optionsRoutes.js";

const ENV = dotenv.config().parsed;
const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/couleur", couleurRoutes);
app.use("/options", optionsRoutes);



const port = ENV.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));