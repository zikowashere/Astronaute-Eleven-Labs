import { z } from "zod";
import Astronaut from "../types/Astronaut";

const validate = (astronaut: Astronaut) => {
  const astronautSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
  });

  return astronautSchema.safeParse(astronaut);
};

export default validate;
