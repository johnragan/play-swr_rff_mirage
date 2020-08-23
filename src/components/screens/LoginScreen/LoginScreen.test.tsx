import React from "react";
import { render } from "@testing-library/react";
import LoginScreen from "./LoginScreen";

test("renders Sign in", () => {
  const { getByText } = render(<LoginScreen />);
  const element = getByText(/Sign in/);
  expect(element).toBeInTheDocument();
});
