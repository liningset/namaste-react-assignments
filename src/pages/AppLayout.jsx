import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const AppLayout = () => {
  const isOnline = useOnlineStatus();

  return !isOnline ? (
    <h1 style={{ marginTop: "2rem", width: "min(90vw, 1400px)" }}>
      به نظر میرسد اینترنت شما خاموش است, لطفا اتصال خود را مجددا چک کنید
    </h1>
  ) : (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
