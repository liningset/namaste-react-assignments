import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import Main from "../components/Main";
import MOCK_DATA from "./MockRestaurants.json";
import { BrowserRouter } from "react-router";
import userEvent from "@testing-library/user-event";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(JSON.parse(JSON.stringify(MOCK_DATA))),
  });
});

describe("search functionality integration tests", () => {
  it("should render 15 restaurant cards at first", async () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
    );

    const cards = await screen.findAllByTestId("card");

    expect(cards.length).toBe(15);
  });

  it("should filter cards based on search", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
    );

    expect(await screen.findAllByTestId("card")).toHaveLength(15);

    await user.type(screen.getByTestId("search-bar"), "ماهی");
    await user.click(screen.getByTestId("submit"));

    expect(await screen.findAllByTestId("card")).toHaveLength(1);

    await user.clear(screen.getByTestId("search-bar"));
    await user.type(screen.getByTestId("search-bar"), "ساندویچ");
    await user.click(screen.getByTestId("submit"));

    expect(await screen.findAllByTestId("card")).toHaveLength(4);

    await user.clear(screen.getByTestId("search-bar"));
    await user.click(screen.getByTestId("submit"));

    expect(await screen.findAllByTestId("card")).toHaveLength(15);
  });
});
