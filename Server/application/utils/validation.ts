import z from "zod";
import { Astronaut } from "../../astronaut/entities/Astronaut";

export default function validation(astronaut: Astronaut) {
  const astronautSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
  });
  return astronautSchema.safeParse(astronaut);
}
