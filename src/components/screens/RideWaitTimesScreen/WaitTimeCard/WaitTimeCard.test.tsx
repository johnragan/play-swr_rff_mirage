import React from "react";
import { render } from "@testing-library/react";
import WaitTimeCard from "./WaitTimeCard";

test("renders Wait Times Card", () => {
  const { getByText } = render(
    <WaitTimeCard
      ride="Living with the Land"
      land="Epcot"
      waitMinutes="15"
      id="1"
    />
  );
  const element = getByText(/Wait Time/);
  expect(element).toBeInTheDocument();
});
