import app from "../../../application/server";
import request from "supertest";
import astronaut from "../../../application/schema/astronautSchema";
import { Astronaut } from "../../../astronaut/entities/Astronaut";
import mongoose from "mongoose";

describe("PUT /", () => {
  describe("update /api/astronaut", () => {
    const testInvalidAtt = async (
      firstName: string,
      lastName: string,
      email: string,
    ) => {
      const astronautToInsert = {
        id: new mongoose.Types.ObjectId(),
        firstName: firstName,
        lastName: lastName,
        email: email,
      };

      const updateAstronaut = {
        firstName,
        lastName: lastName,
        email: email,
      };

      const result = await astronaut.create(astronautToInsert);
      const { status, body } = await request(app)
        .put("/api/astronaut/" + result.id)
        .send(updateAstronaut);

      return { status, body };
    };
    beforeEach(() => {
      app;
    });
    afterEach(async () => {
      app.close();
      await astronaut.deleteMany({});
    });
    it("should return update astronaut", async () => {
      const { status, body } = await testInvalidAtt(
        "ABCDF",
        "ABCDF",
        "valid@valid.com",
      );
      const updateAstronaut = {
        firstName: "ABCDF",
        lastName: "ABCDF",
        email: "valid@valid.com",
      };
      expect(status).toBe(200);
      expect(body).toMatchObject(updateAstronaut);
    });

    it("should return 500 if the astronaut's lastname is not valid", async () => {
      const { status } = await testInvalidAtt("ABCDF", "AB", "valid@valid.com");
      expect(status).toBe(500);
    });
    it("should return 500 if the astronaut's firstname is not valid", async () => {
      const { status } = await testInvalidAtt("AB", "ABCDF", "valid@valid.com");
      expect(status).toBe(500);
    });
    it("should return 500 if the astronaut's email is not valid", async () => {
      const { status } = await testInvalidAtt("ABCDF", "ABCDF", "valid");
      expect(status).toBe(500);
    });
  });
});
