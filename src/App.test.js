import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders ultimate planning resource", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Your Ultimate WDW Planning Resource/);
  expect(element).toBeInTheDocument();
});

// TODO: This test needs to be moved to its own area.
test("renders make a reservation", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Make a Walt Disney World Reservation/);
  expect(element).toBeInTheDocument();
});

test("renders MDE button", () => {
  const { getByText } = render(<App />);
  const mdeButton = getByText(/My Disney Experience/i);
  expect(mdeButton).toBeInTheDocument();
});
