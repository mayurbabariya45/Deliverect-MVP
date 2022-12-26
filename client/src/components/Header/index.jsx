import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.logo} variant="h2" gutterBottom>
          DELIVERECT MVP
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
