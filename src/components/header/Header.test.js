import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

test("renders make a reservation", () => {
  const { getByText } = render(<Header />);
  const element = getByText(/Make a Walt Disney World Reservation/);
  expect(element).toBeInTheDocument();
});

test("renders MDE button", () => {
  const { getByText } = render(<Header />);
  const mdeButton = getByText(/My Disney Experience/i);
  expect(mdeButton).toBeInTheDocument();
});
