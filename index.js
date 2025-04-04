import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import initialisation from './config/Initialisation.js';
import verifierToken from './authentification/VerifierToken.js';
import authorisation from './authentification/Authorisation.js';

import couleurRoute from './routes/CouleurRoute.js';
import optionRoute from './routes/OptionRoute.js';
import voitureRoute from './routes/VoitureRoute.js';
import imageRoute from './routes/ImageRoute.js';
import login from './routes/AuthorisationRoute.js';
import RoleRoute from './routes/RoleRoute.js';
import UtilisateurRoute from './routes/UtilisateurRoute.js';
import modeleRoute from './routes/ModeleRoute.js';
import marqueRoute from './routes/MarqueRoute.js';

const ENV = dotenv.config().parsed;
const app = express();
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Generation des tables et des données par défaut
initialisation();

app.use("/api/login", login);
app.use("/api/couleur",verifierToken, couleurRoute);
app.use("/api/option",verifierToken, optionRoute);
app.use("/api/voiture",verifierToken, voitureRoute);
app.use("/api/image",verifierToken, imageRoute);
app.use("/api/modele",verifierToken, modeleRoute);
app.use("/api/marque",verifierToken, marqueRoute);
app.use("/api/role", verifierToken, authorisation(["Admin"]), RoleRoute);
app.use("/api/utilisateur", verifierToken, authorisation(["Admin"]), UtilisateurRoute);


const port = ENV.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));