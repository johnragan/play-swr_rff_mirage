import React from "react";

import Typography from "@material-ui/core/Typography";
import WaitTimesCard, { RideWaitTime } from "./WaitTimeCard/WaitTimeCard";

// enum Parks {
//   MK = 1,
//   EP = 2,
//   HS = 3,
//   AK = 4,
// }

type RideWaitTimes = RideWaitTime[];

type Props = {};

const RideWaitTimesScreen: React.FC<Props> = () => {
  const epcotRides: RideWaitTimes = [
    {
      ride: "Living with the Land",
      land: "Epcot",
      waitMinutes: "15",
    },
    {
      ride: "Test Track",
      land: "Epcot",
      waitMinutes: "35",
    },
  ];

  function RenderCards(rides: RideWaitTimes) {
    return (
      <React.Fragment>
        <ul>
          {rides.map(
            (
              ride: { ride: string; land: string; waitMinutes: string },
              index: number
            ) => (
              <li key={index}>
                <WaitTimesCard {...ride} />
              </li>
            )
          )}
        </ul>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4">
        Ride Wait Times
      </Typography>
      <Typography component="h1" variant="h5">
        The following are the wait times for Epcot:
      </Typography>

      {RenderCards(epcotRides)}
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
