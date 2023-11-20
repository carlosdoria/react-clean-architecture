import faker from "faker";
import { type AuthenticationParams } from "@/domain/usecases/authentication";

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
