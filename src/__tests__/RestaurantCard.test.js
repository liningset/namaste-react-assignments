import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import Avatar, { withPro } from "../components/Avatar";
import MockData from "./MockData.json";

describe("RestaurantCard base tests", () => {
  test("should render card with the desired heading", () => {
    render(<RestaurantCard data={MockData} />);

    const heading = screen.getByRole("heading", { name: MockData.title });

    expect(heading).toBeInTheDocument();
  });
});

describe("Avatar sub-component tests", () => {
  test("should show avatar with an image", () => {
    render(<Avatar src={MockData.logo} alt={MockData.title} />);

    const img = screen.getByRole("img", { name: MockData.title });

    expect(img).toBeInTheDocument();
  });

  test("should render ProAvatar with pro label", () => {
    const ProAvatar = withPro(Avatar);
    render(<ProAvatar src={MockData.logo} alt={MockData.title} />);

    const proSpan = screen.getByText(/pro/i);

    expect(proSpan).toBeInTheDocument();
  });
});
