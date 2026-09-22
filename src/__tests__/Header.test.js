import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";

test("should render Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const nav = screen.getByRole("navigation");

  //assertions
  expect(nav).toBeInTheDocument();
});

test("should have a cart with length of zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const result = screen.getByText(/سبد.+[0۰]/);

  //assertions
  expect(result).toBeInTheDocument();
});

test("should have a visible logo", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  const result = screen.getByRole("img", { name: "Logo" });

  //assertions
  expect(result).toBeInTheDocument();
});
