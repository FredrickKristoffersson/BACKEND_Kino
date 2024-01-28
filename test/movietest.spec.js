import { test } from "@jest/globals";
import request from "supertest";
import app from "../src/app";

test("Movie shows correct title", () => {
  request(app).get("/movies/2").expect(200);
});
