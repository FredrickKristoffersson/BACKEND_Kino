// import app from "./src/app.js";

import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());

app.listen(5080);
