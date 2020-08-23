import React from "react";
import { render } from "@testing-library/react";
import StartScreen from "./StartScreen";

test("renders ultimate planning resource", () => {
  const { getByText } = render(<StartScreen />);
  const element = getByText(/Your Ultimate WDW Planning Resource/);
  expect(element).toBeInTheDocument();
});
