import { createContext } from "react";

const UserContext = createContext({ isLoggedIn: false, username: "default" });

export default UserContext;
