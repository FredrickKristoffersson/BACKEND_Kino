import { expect, test } from "@jest/globals";
import request from "supertest";
import app from "../src/app";
import { response } from "express";

test("Correct title match Pulp Fiction movie", async () => {
  const response = await request(app).get("/movies/8");
  expect(response.text).toMatch("Pulp Fiction");
});

test("Correct title match Encanto movie", async () => {
  const response = await request(app).get("/movies/2");
  expect(response.text).toMatch("Encanto");
});

test("Correct title match Isle of dogs movie", async () => {
  const response = await request(app).get("/movies/1");
  expect(response.text).toMatch("Isle of dogs");
});

test("Correct title match Min granne Totoro movie", async () => {
  const response = await request(app).get("/movies/4");
  expect(response.text).toMatch("Min granne Totoro");
});

test("Correct title match The Shawshank Redemption movie", async () => {
  const response = await request(app).get("/movies/3");
  expect(response.text).toMatch("The Shawshank Redemption");
});

test("Correct title match Forrest Gump movie", async () => {
  const response = await request(app).get("/movies/6");
  expect(response.text).toMatch("Forrest Gump");
});

test("Correct title match The Muppets movie", async () => {
  const response = await request(app).get("/movies/5");
  expect(response.text).toMatch("The Muppets");
});
