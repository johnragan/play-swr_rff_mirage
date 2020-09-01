import React from "react";
import { render } from "@testing-library/react";
import WaitTimeForm from "./WaitTimeForm";

test("renders Add Ride", () => {
  const { getByText } = render(<WaitTimeForm />);
  const element = getByText(/Add Rides/);
  expect(element).toBeInTheDocument();
});
