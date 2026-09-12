import { useContext } from "react";
import UserContext from "../utils/UserContext";

const LoginPage = () => {
  const { setUser, setLoggedIn } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(e.target.elements[0].value);
    setLoggedIn(true);
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <form className="flex flex-col gap-2" onSubmit={(e) => handleLogin(e)}>
        <label htmlFor="username">نام کاربری</label>
        <input
          className="p-2 text-lg"
          id="username"
          type="text"
          placeholder="نام کاربری"
        />
        <label htmlFor="password">پسورد</label>
        <input
          className="p-2 text-lg"
          id="password"
          type="password"
          placeholder="رمز"
        />
        <button
          type="submit"
          className="p-2 bg-[#252525] text-white hover:bg-[#858585] border-none duration-300"
        >
          ورود
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
