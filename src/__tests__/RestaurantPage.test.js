import { within, render, screen } from "@testing-library/react";
import {
  vendorDetails,
  vendorReview,
  vendorMenu,
} from "./mocks/mockVendorData";
import "@testing-library/jest-dom";
import RestaurantPage from "../pages/RestaurantPage";
import CartPage from "../pages/CartPage";
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";

beforeEach(() => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({
      json: () => Promise.resolve(JSON.parse(JSON.stringify(vendorDetails))),
    })
    .mockResolvedValueOnce({
      json: () => Promise.resolve(JSON.parse(JSON.stringify(vendorReview))),
    })
    .mockResolvedValueOnce({
      json: () => Promise.resolve(JSON.parse(JSON.stringify(vendorMenu))),
    });
});

window.scrollTo = jest.fn();

describe("Restaurant page tests", () => {
  it("should render restaurant page with a heading", async () => {
    render(<RestaurantPage />);

    expect(
      await screen.findByRole("heading", { name: vendorDetails.data.title }),
    ).toBeInTheDocument();

    expect(
      await screen.findByRole("heading", { name: vendorDetails.data.title }),
    ).toHaveTextContent("کترینگ هلسا");
  });

  it("should render accordions with their products", async () => {
    const user = userEvent.setup();

    render(
      <Provider store={appStore}>
        <RestaurantPage />
      </Provider>,
    );

    const accordions = await screen.findAllByTestId("accordion");

    expect(accordions).toHaveLength(8);

    await user.click(within(accordions[0]).getByRole("button"));

    expect(await screen.findAllByTestId("product")).toHaveLength(6);

    await user.click(within(accordions[7]).getByRole("button"));

    expect(await screen.findAllByTestId("product")).toHaveLength(9);
  });

  it("should add and remove product to cart successfully", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantPage />
          <CartPage />
        </Provider>
      </BrowserRouter>,
    );

    const accordions = await screen.findAllByTestId("accordion");

    await user.click(within(accordions[0]).getByRole("button"));

    const addBtns = await screen.findAllByTestId("add-btn");

    await user.click(addBtns[0]);
    await user.click(addBtns[1]);
    await user.click(addBtns[2]);

    expect(await screen.findByText(/سبد.*3.*\)/)).toBeInTheDocument();
    expect(await screen.findAllByTestId("remove-btn")).toHaveLength(6);

    const removeBtns = await screen.findAllByTestId("remove-btn");

    await user.click(removeBtns[0]);

    expect(await screen.findByText(/سبد.*2.*\)/)).toBeInTheDocument();
    expect(await screen.findAllByTestId("remove-btn")).toHaveLength(4);
  });

  it("should clear cart when clicking 'خالی کردن سبد'", async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantPage />
          <CartPage />
        </Provider>
      </BrowserRouter>,
    );

    const accordions = await screen.findAllByTestId("accordion");

    await user.click(within(accordions[0]).getByRole("button"));

    const addBtns = await screen.findAllByTestId("add-btn");

    await user.click(addBtns[0]);
    await user.click(addBtns[1]);
    await user.click(addBtns[2]);

    expect(await screen.findByText(/سبد.*5.*\)/)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "خالی کردن سبد" }));

    expect(await screen.findByText(/سبد.*0.*\)/)).toBeInTheDocument();
    // expect(await screen.findAllByTestId("remove-btn")).toHaveLength(0);
  });
});
