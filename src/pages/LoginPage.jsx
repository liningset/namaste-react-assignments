import { useContext } from "react";
import UserContext from "../utils/UserContext";

const LoginPage = () => {
  const { setUser, setLoggedIn } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setUser(formData.get("username"));
    setLoggedIn(true);
  };
  return (
    <div className="flex w-full h-full items-center justify-center">
      <form className="flex flex-col gap-2" onSubmit={(e) => handleLogin(e)}>
        <input
          className="p-2 text-lg"
          name="username"
          type="text"
          placeholder="نام کاربری"
          required
        />
        <input
          className="p-2 text-lg"
          name="password"
          type="password"
          placeholder="رمز"
          required
        />
        <button
          type="submit"
          className="p-2 text-lg bg-[#252525] text-white hover:bg-[#858585] border-none duration-300"
        >
          ورود
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
