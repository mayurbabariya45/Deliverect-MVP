import React from "react";
import { useEffect } from "react";

import useStyles from "./styles";

const Dashboard = ({ loading, linkedAccounts, getAllLinkedAccount }) => {
  const classes = useStyles();
  useEffect(() => {
    if (!linkedAccounts && linkedAccounts?.length < 0) {
      getAllLinkedAccount();
    }
    console.log(
      "Debug :::> File: index.jsx, Line : 12, linkedAccounts :::>",
      linkedAccounts
    );
  }, [linkedAccounts, getAllLinkedAccount]);

  if (loading) {
    <div>Loading</div>;
  }
  return <div className={classes.root}>{linkedAccounts}</div>;
};

export default Dashboard;
