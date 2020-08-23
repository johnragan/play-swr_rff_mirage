import React from "react";
import { render } from "@testing-library/react";
import Login from "./Login";

test("renders Sign in", () => {
  const { getByText } = render(<Login />);
  const element = getByText(/Sign in/);
  expect(element).toBeInTheDocument();
});
