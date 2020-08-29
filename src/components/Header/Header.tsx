import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

type Props = {
  onMDEClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Header: React.FC<Props> = ({ onMDEClick }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Make a Walt Disney World Reservation
        </Typography>
        <Button color="inherit" onClick={onMDEClick}>
          My Disney Experience
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
