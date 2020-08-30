import React from "react";
import { render } from "@testing-library/react";
import RideWaitTimesScreen from "./RideWaitTimesScreen";

test("renders Ride Wait Times", () => {
  const { getByText } = render(<RideWaitTimesScreen />);
  const element = getByText(/Ride Wait Times/);
  expect(element).toBeInTheDocument();
});

test("renders Epcot Wait Times", () => {
  const { getByText } = render(<RideWaitTimesScreen />);
  const element = getByText(/The following are the wait times for Epcot:/);
  expect(element).toBeInTheDocument();
});
