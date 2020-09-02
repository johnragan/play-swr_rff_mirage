import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {
  Parks,
  getParkById,
  MK,
  EP,
  HS,
  AK,
  PARK_RIDE_URLS,
  MK_RIDES_URL,
  EP_RIDES_URL,
  HS_RIDES_URL,
  AK_RIDES_URL,
  nextRideId,
} from "../../constants/parks";
import { NativeSelect } from "@material-ui/core";
// trigger is used after the update is made
// mutate is used before the update is made, like an optimistic update first,
// followed by a refresh
import useSWR, { trigger, mutate } from "swr";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function WaitTimeForm() {
  let [newRideText, setNewRideText] = useState("");
  let [newParkText, setNewParkText] = useState("");
  let [isAddingRide, setIsAddingRide] = useState();
  let [isSavingRide, setIsSavingRide] = useState();
  //let [rides, setRides] = useState(null);
  let [newWaitTimeText, setNewWaitTimeText] = useState("");
  let [parkId, setParkId] = useState(1);
  console.log(isAddingRide);
  console.log(isSavingRide);

  const classes = useStyles();

  const { data: ridesMK } = useSWR(MK_RIDES_URL);
  const { data: ridesEP } = useSWR(EP_RIDES_URL);
  const { data: ridesHS } = useSWR(HS_RIDES_URL);
  const { data: ridesAK } = useSWR(AK_RIDES_URL);
  const parkRides = [ridesMK, ridesMK, ridesEP, ridesHS, ridesAK];

  // @ts-ignore
  function createRide(e) {
    e.preventDefault();

    if (!newRideText) {
      return;
    }

    // @ts-ignore
    setIsSavingRide(true);

    const values = {
      ride: newRideText,
      land: newParkText,
      waitMinutes: newWaitTimeText,
      id: nextRideId(),
      ...(parkId && { parkId }),
    };
    mutate(PARK_RIDE_URLS[parkId], [...parkRides[parkId], values], false);
    fetch("/api/rides", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(() => {
        setNewRideText("");
        setNewParkText("");
        setNewWaitTimeText("");
        trigger(PARK_RIDE_URLS[parkId]);
        // @ts-ignore
        //setRides((rides) => [...rides, json.ride]);
        // @ts-ignore
        setIsAddingRide(false);
      })
      .catch((e) => {
        // @ts-ignore
        setError("Your Ride wasn't saved. Try again.");
        console.error(e);
      })
      .finally(() => {
        // @ts-ignore
        setIsSavingRide(false);
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Rides
        </Typography>
        <form className={classes.form} noValidate onSubmit={createRide}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="rname"
                name="rideName"
                variant="outlined"
                required
                fullWidth
                id="rideName"
                label="Ride Name"
                autoFocus
                value={newRideText}
                onChange={(e) => setNewRideText(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <NativeSelect
                defaultValue={MK}
                inputProps={{
                  name: "parkName",
                  id: "parkName",
                }}
                onChange={(e) => {
                  // @ts-ignore
                  setNewParkText(getParkById(e.target.value));
                  // @ts-ignore
                  setParkId(e.target.value);
                }}
              >
                <option value={Parks.MK}>{MK}</option>
                <option value={Parks.EP}>{EP}</option>
                <option value={Parks.HS}>{HS}</option>
                <option value={Parks.AK}>{AK}</option>
              </NativeSelect>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="waitTime"
                label="Wait Time"
                name="waitTime"
                autoComplete="wtime"
                value={newWaitTimeText}
                onChange={(e) => setNewWaitTimeText(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Ride
          </Button>
        </form>
      </div>
    </Container>
  );
}