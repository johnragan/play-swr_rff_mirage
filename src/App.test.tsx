import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders make a reservation", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Make a Walt Disney World Reservation/);
  expect(element).toBeInTheDocument();
});
