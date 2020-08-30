import React from "react";

import Typography from "@material-ui/core/Typography";
import WaitTimesCard from "./WaitTimeCard/WaitTimesCard";

const RenderCards = (
  // @ts-ignore
  rides //: [{ ride: string; land: string; waitMinutes: string }]
) => {
  rides = [
    {
      ride: "Living with the Land",
      land: "Epcot",
      waitMinutes: "15",
    },
  ];
  return (
    <React.Fragment>
      {rides.map((ride: any) => (
        <WaitTimesCard {...ride} />
      ))}
    </React.Fragment>
  );
};

type Props = {};

const RideWaitTimesScreen: React.FC<Props> = () => {
  const epcotRides = [
    {
      ride: "Living with the Land",
      land: "Epcot",
      waitMinutes: "15",
    },
  ];

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4">
        Ride Wait Times
      </Typography>
      <Typography component="h1" variant="h5">
        The following are the wait times for Epcot:
      </Typography>
      <WaitTimesCard {...epcotRides[0]} />
      {/* @ts-ignore */}
      <RenderCards rides={epcotRides} />
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
