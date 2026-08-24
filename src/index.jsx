import { createBrowserRouter, RouterProvider } from "react-router";
import ReactDOM from "react-dom/client";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import RestaurantPage from "./pages/RestaurantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/restaurants/:resID",
        element: <RestaurantPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
