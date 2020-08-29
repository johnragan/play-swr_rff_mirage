import React from "react";
import { render } from "@testing-library/react";
import SignUpScreen from "./SignUpScreen";

test("renders Sign up", () => {
  const { getByText } = render(<SignUpScreen />);
  const element = getByText(/Sign up/);
  expect(element).toBeInTheDocument();
});

test("Sign Up", () => {
  const { getByText } = render(<SignUpScreen />);
  const element = getByText(/Sign Up/);
  expect(element).toBeInTheDocument();
});

test("renders marketing text", () => {
  const { getByText } = render(<SignUpScreen />);
  const element = getByText(
    /I want to receive inspiration, marketing promotions and updates via email./
  );
  expect(element).toBeInTheDocument();
});
