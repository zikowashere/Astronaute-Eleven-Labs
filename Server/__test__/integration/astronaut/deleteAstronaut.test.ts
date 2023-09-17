import app from "../../../application/server";
import astronaut from "../../../application/schema/astronautSchema";
import request from "supertest";

describe("DELETE /", () => {
  describe(" delete /api/astronaut", () => {
    beforeEach(() => app);
    afterEach(async () => {
      await astronaut.deleteMany({});
      app.close();
    });

    it("should return 204 if astonaut was succefully deleted", async () => {
      const name = new Array(5).join("b");
      const astronautToInsert = {
        firstName: name,
        lastName: name,
        email: name + "@test.com",
      };

      const result = await astronaut.create(astronautToInsert);
      const id = result._id.toString();
      const { status } = await request(app).delete("/api/astronaut/" + id);
      expect(status).toBe(204);
    });
  });
});
