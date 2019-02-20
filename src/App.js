import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//Components
import UserStatus from "./Components/UserStatus.js";
import Searcher from "./Components/Searcher.js";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function AppContainer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <UserStatus className={classes.container} />
        </Grid>
        <Grid item xs={6}>
          <Searcher />
        </Grid>
      </Grid>
    </div>
  );
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppContainer);
