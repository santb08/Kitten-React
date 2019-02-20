/**
 * This class is made for the container of the left-side of the app
 * This container will "contain" the components designed for:
 *    Profile
 *    Chats
 */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

//Colors
import deepPurple from "@material-ui/core/colors/deepPurple";
import yellow from "@material-ui/core/colors/yellow";

//Components
import ChatList from "./ChatList.js";
import Profile from "./Profile.js";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500
  },
  tabs: {
    backgroundColor: deepPurple[200],
    color: "#000"
  },
  indicator: {
    backgroundColor: yellow[300]
  }
});

class UserStatus extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.tabs}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.indicator }}
              label="PROFILE"
            />
            <Tab
              classes={{ root: classes.tabRoot, selected: classes.indicator }}
              label="CHATS"
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Profile />
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <ChatList />
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(UserStatus);
