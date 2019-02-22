import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

//Components
import UserStatus from "./Components/UserStatus.js";
import SearchResult from "./Components/SearchResult.js";

const status = {
  name: '',
  image: ''
}

const styles = theme => ({
  root: {
    height: "100%",
    maxHeight: "100%",
    overflow: "auto"
  },
  container: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    overflow: "hidden"
  },

  //SCROLLBAR CODE
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey"
    }
  }
});

class AppContainer extends Component {
  state = {
    matches: []
  };

  addMatch = kitten => {
    const { matches } = { ...this.state };
    matches.push(kitten);
    this.setState({ matches });
  };

  render(props) {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <UserStatus
              matches={this.state.matches}
              className={classes.container}
            />
          </Grid>
          <Grid item xs={6}>
            <SearchResult addMatch={this.addMatch} />
          </Grid>
        </Grid>
      </div>
    );
  }
}
AppContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppContainer);
