import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import database from './config/Connections.js';

import couleurRoute from './routes/CouleurRoute.js';
import optionRoute from './routes/OptionRoute.js';
import voitureRoute from './routes/VoitureRoute.js';
import imageRoute from './routes/ImageRoute.js';

const ENV = dotenv.config().parsed;
const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Generation des tables
database.sync({alter:true});

app.use("/api/couleur", couleurRoute);
app.use("/api/option", optionRoute);
app.use("/api/voiture", voitureRoute);
app.use("/api/image", imageRoute);


const port = ENV.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));