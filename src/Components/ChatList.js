/**
 * This is a component made for the chats of the kitten
 * This will be fillen whenever a "match" happens
 */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  avatar: {
    margin: 10,
    width: 120,
    height: 120
  },
  chatContainer: {
    overflow: "hidden"
  }
});

class ChatItem extends Component {
  render() {
    const { match, classes } = this.props;

    return (
      <ListItem>
        <Avatar alt={match.name} src={match.image} className={classes.avatar} />
        <ListItemText primary={match.name} secondary="Meow" />
      </ListItem>
    );
  }
}

class Profile extends Component {
  render() {
    const { matches, classes } = this.props;
    const matchesRender = matches.map((match, index) => (
      <ChatItem match={match} key={index} classes={classes} />
    ));
    return (
      <div className={classes.chatContainer}>
        <List className={classes.root}>{matchesRender}</List>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
