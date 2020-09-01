import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import useSWR from "swr";
import WaitTimesCard, { RideWaitTime } from "./WaitTimeCard/WaitTimeCard";
import { Parks, getParkById, MK, EP, HS, AK } from "../../../constants/parks";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  FormHelperText,
  makeStyles,
  List,
  ListItem,
  Grid,
} from "@material-ui/core";
import WaitTimeForm from "../../forms/WaitTimeForm";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

type RideWaitTimes = RideWaitTime[];

type Props = {
  defaultPark: Parks;
};

const RideWaitTimesScreen: React.FC<Props> = ({ defaultPark }) => {
  const classes = useStyles();
  let [parkId, setParkId] = useState(defaultPark);

  // @ts-ignore
  const { data: ridesMK } = useSWR(
    `http://localhost:3000/api/parks/${Parks.MK}/rides`
  );

  // @ts-ignore
  const { data: ridesEP } = useSWR(
    `http://localhost:3000/api/parks/${Parks.EP}/rides`
  );

  // @ts-ignore
  const { data: ridesHS } = useSWR(
    `http://localhost:3000/api/parks/${Parks.HS}/rides`
  );

  // @ts-ignore
  const { data: ridesAK } = useSWR(
    `http://localhost:3000/api/parks/${Parks.AK}/rides`
  );

  const parkRides = [ridesMK, ridesMK, ridesEP, ridesHS, ridesAK];

  // @ts-ignore
  function RenderCards(rides: RideWaitTimes) {
    console.log(`rides is ${rides}`);
    if (!rides) {
      return <div>No Data</div>;
    }
    return (
      <React.Fragment>
        <List>
          {rides.map(
            (
              ride: { ride: string; land: string; waitMinutes: string },
              index: number
            ) => (
              <ListItem key={index}>
                <WaitTimesCard {...ride} />
              </ListItem>
            )
          )}
        </List>
      </React.Fragment>
    );
  }

  const handleParkChange = (event: any) => {
    setParkId(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="uncontrolled-native">Park</InputLabel>
            <NativeSelect
              defaultValue={defaultPark}
              inputProps={{
                name: "name",
                id: "uncontrolled-native",
              }}
              onChange={handleParkChange}
            >
              <option value={Parks.MK}>{MK}</option>
              <option value={Parks.EP}>{EP}</option>
              <option value={Parks.HS}>{HS}</option>
              <option value={Parks.AK}>{AK}</option>
            </NativeSelect>
            <FormHelperText>Pick your park</FormHelperText>
          </FormControl>
          <Typography component="h1" variant="h4">
            Ride Wait Times
          </Typography>
          <Typography component="h1" variant="h5">
            The following are the wait times for {getParkById(parkId)}:
          </Typography>
          {/* @ts-ignore */}
          {RenderCards(parkRides[parkId])}
        </Grid>
        <Grid item xs={12} sm={6}>
          <WaitTimeForm />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default RideWaitTimesScreen;
