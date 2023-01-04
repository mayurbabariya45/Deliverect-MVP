import React from "react";
import { useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import useStyles from "./styles";

const Dashboard = ({ loading, linkedAccounts, getAllLinkedAccount }) => {
  const classes = useStyles();
  const { _items: items } = linkedAccounts;

  useEffect(() => {
    if (linkedAccounts?.length === 0) {
      getAllLinkedAccount();
    }
  }, []);

  if (loading) {
    <div>Loading</div>;
  }
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {items?.map((item, index) => (
          <ListItem key={index} button>
            <ListItemText primary={`Account Name: ${item.name}`} />
            <ListItemText primary={`currency code: ${item.currency}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Dashboard;
