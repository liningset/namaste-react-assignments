import { createContext } from "react";

const UserContext = createContext({
  loggedIn: false,
  user: "default",
  setLoggedIn: () => {},
  setUser: () => {},
});

export default UserContext;
