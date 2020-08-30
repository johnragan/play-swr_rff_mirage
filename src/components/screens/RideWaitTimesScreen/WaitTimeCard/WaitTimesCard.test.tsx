import React from "react";
import { render } from "@testing-library/react";
import WaitTimesCard from "./WaitTimesCard";

test("renders Wait Times Card", () => {
  const { getByText } = render(
    <WaitTimesCard ride="Living with the Land" land="Epcot" waitMinutes="15" />
  );
  const element = getByText(/Wait Time/);
  expect(element).toBeInTheDocument();
});
