import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  return <h1 style={{ fontSize: "5rem" }}>{err.status}</h1>;
};
export default ErrorPage;
