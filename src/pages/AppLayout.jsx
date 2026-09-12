import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useState } from "react";

const AppLayout = () => {
  const isOnline = useOnlineStatus();
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("کاربر مهمان");

  return !isOnline ? (
    <h1 style={{ marginTop: "2rem", width: "min(90vw, 1400px)" }}>
      به نظر میرسد اینترنت شما خاموش است, لطفا اتصال خود را مجددا چک کنید
    </h1>
  ) : (
    <UserContext.Provider value={{ loggedIn, user, setLoggedIn, setUser }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
};

export default AppLayout;
