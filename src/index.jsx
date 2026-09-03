import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import RestaurantPage from "./pages/RestaurantPage";

//wanted to practice lazy loading
const AboutPage = lazy(() => import("./pages/AboutPage"));

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
        element: (
          <Suspense fallback={<h1>در حال بارگیری...</h1>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/restaurants/:vendorID",
        element: <RestaurantPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);
