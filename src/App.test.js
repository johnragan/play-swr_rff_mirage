import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders ultimate planning resource", () => {
  const { getByText } = render(<App />);
  const element = getByText(/Your Ultimate WDW Planning Resource/);
  expect(element).toBeInTheDocument();
});
