// import app from "./src/app.js";

import express, { response } from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
  response.render("./layouts/main");
});

app.use("/static", express.static("./static"));
app.use("/assets", express.static("./assets"));

app.listen(5080);
