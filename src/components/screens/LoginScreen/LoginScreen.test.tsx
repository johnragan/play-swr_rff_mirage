import React from "react";
import { render } from "@testing-library/react";
import LoginScreen from "./LoginScreen";

test("renders Sign in", () => {
  const { getByText } = render(<LoginScreen />);
  const element = getByText(/Sign in/);
  expect(element).toBeInTheDocument();
});

test("renders Remember me", () => {
  const { getByText } = render(<LoginScreen />);
  const element = getByText(/Remember me/);
  expect(element).toBeInTheDocument();
});

test("renders Forgot password", () => {
  const { getByText } = render(<LoginScreen />);
  const element = getByText(/Forgot password/);
  expect(element).toBeInTheDocument();
});

test("Sign Up", () => {
  const { getByText } = render(<LoginScreen />);
  const element = getByText(/Sign Up/);
  expect(element).toBeInTheDocument();
});
