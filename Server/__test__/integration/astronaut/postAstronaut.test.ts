import app from "../../../application/server";
import request from "supertest";
import astronaut from "../../../application/schema/astronautSchema";
import { Astronaut } from "../../../astronaut/entities/Astronaut";
import mongoose from "mongoose";
import { array } from "zod";

describe("POST astronaut", () => {
  describe("api/astronaut", () => {
    beforeEach(() => {
      app;
    });
    afterEach(async () => {
      app.close();
      await astronaut.deleteMany({});
    });

    it("should insert a valid astronaut to database", async () => {
      const name = new Array(5).join("b");
      const astronautToInsert = {
        firstName: name,
        lastName: name,
        email: name + "@test.com",
      };
      const { status, body } = await request(app)
        .post("/api/astronaut")
        .send(astronautToInsert);
      expect(status).toBe(200);
      expect(body).toMatchObject({
        __v: 0,
        email: name + "@test.com",
        firstName: name,
        lastName: name,
      });
    });
    it("should return 500 if the astronaut already exist in DataBase", async () => {
      const name = new Array(5).join("b");
      const astronautToInsert = {
        firstName: name,
        lastName: name,
        email: name + "@test.com",
      };
      await request(app).post("/api/astronaut").send(astronautToInsert);
      const { status, body } = await request(app)
        .post("/api/astronaut")
        .send(astronautToInsert);
      expect(status).toBe(500);
    });
    it("should return 500 if the astronaut object is not valid", async () => {
      const name = new Array(5).join("b");
      const astronautToInsert = {
        firstName: name,
        lastName: name,
        email: "test.com",
      };
      const { status, body } = await request(app)
        .post("/api/astronaut")
        .send(astronautToInsert);
      expect(status).toBe(500);
    });
  });
});
