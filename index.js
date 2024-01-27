// import app from "./src/app.js";

import express, { response } from "express";
import { engine } from "express-handlebars";
import { loadMoviesFromAPI, separateMovie } from "./src/movies.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
  response.render("home");
});

app.get("/movies", async (request, response) => {
  const movies = await loadMoviesFromAPI();
  response.render("movieSection", { movies });
});

app.get("/movies/:movieId", async (request, response) => {
  const movie = await separateMovie(request.params.movieId);
  response.render("singleMovie", { movie });
});

app.get("/", async (request, response) => {
  response.render("./layouts/main");
});

app.use("/static", express.static("./static"));
app.use("/assets", express.static("./assets"));

app.listen(5080);
