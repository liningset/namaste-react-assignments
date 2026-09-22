import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutPage from "../pages/AboutPage";

test("should render the AboutPage component", () => {
  render(<AboutPage />);

  const h1 = screen.queryByRole("heading");

  //assertions
  expect(h1).toBeInTheDocument();
});
