import astronautSchema from "../../application/schema/astronautSchema";
import validation from "../../application/utils/validation";

describe("validation astonaut attribut", () => {
  it("should return true for an astronaut object valid", () => {
    const astronaut = {
      firstName: "zakaria",
      lastName: "daouma",
      email: "email@email.com",
    };
    const result = validation(astronaut);
    expect(result.success).toBe(true);
  });
  it("should return false or an astronaut object not valid ", () => {
    const astonauts = [
      {
        firstName: "zakaria",
        lastName: "d",
        email: "email@email.com",
      },
      {
        firstName: "z",
        lastName: "daouma",
        email: "email@email.com",
      },
      {
        firstName: "zakaria",
        lastName: "daouma",
        email: "email",
      },
    ];

    astonauts.map((astronaut) => {
      const result = validation(astronaut);
      expect(result.success).toBe(false);
    });
  });
});
