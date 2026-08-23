import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return <h1>Error</h1>;
};
export default ErrorPage;
