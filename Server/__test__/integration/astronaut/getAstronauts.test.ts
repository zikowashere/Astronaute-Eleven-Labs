import app from "../../../application/server";
import request from "supertest";
import astronaut from "../../../application/schema/astronautSchema";
import { Astronaut } from "../../../astronaut/entities/Astronaut";

describe("GET astronauts", () => {
  describe("api/astronaut", () => {
    beforeEach(() => app);
    afterEach(async () => {
      app.close();
      await astronaut.deleteMany({});
    });
    it("should return list of astronauts", async () => {
      const astronauts = [
        {
          firstName: "daouma",
          lastName: "zakaria",
          email: "zak@gmail.com",
        },
        {
          firstName: "daoum",
          lastName: "ziko",
          email: "zikok@gmail.com",
        },
      ];
      await astronaut.collection.insertMany(astronauts);
      const { status, body } = await request(app).get("/api/astronaut");
      expect(status).toBe(200);
      //expect(body.length).toBe(2);
      expect(
        body.some((ast: Astronaut) => ast.firstName === "daoum"),
      ).toBeTruthy();
      expect(
        body.some((ast: Astronaut) => ast.firstName === "daouma"),
      ).toBeTruthy();
      expect(
        body.some((ast: Astronaut) => ast.lastName === "zakaria"),
      ).toBeTruthy();
      expect(
        body.some((ast: Astronaut) => ast.lastName === "ziko"),
      ).toBeTruthy();
      expect(
        body.some((ast: Astronaut) => ast.email.match(/zak@/)),
      ).toBeTruthy();
      expect(
        body.some((ast: Astronaut) => ast.email.match(/zikok@/)),
      ).toBeTruthy();
    });
  });
});
