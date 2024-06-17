import type { User } from "@/types";
import { persistentAtom } from "@nanostores/persistent";

export const userCredentials = persistentAtom<User>(
  "user",
  {
    login: "",
    password: "",
  },
  { encode: JSON.stringify, decode: JSON.parse }
);

export function setUser(user: User) {
  userCredentials.set(user);
}

export function getUser() {
  return userCredentials.get();
}

export function isLoggedIn(): boolean {
  return !!getUser().login;
}
