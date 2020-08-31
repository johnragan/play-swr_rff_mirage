import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
});

type Props = {
  ride: string;
  land: string;
  waitMinutes: string;
};

export type RideWaitTime = {
  ride: string;
  land: string;
  waitMinutes: string;
};

const WaitTimesCard: React.FC<Props> = ({ ride, land, waitMinutes }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image="/static/images/cards/cars.png"
        title="Cars"
      />
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Ride Wait Time
        </Typography>
        <Typography variant="h5" component="h2">
          {ride}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {land}
        </Typography>
        <Typography variant="body2" component="p">
          {waitMinutes} Minute Wait
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Plan</Button>
      </CardActions>
    </Card>
  );
};

export default WaitTimesCard;
