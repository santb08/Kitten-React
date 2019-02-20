//REACT
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//HELPERS
import Names from "../data/names.js";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class RecipeReviewCard extends React.Component {
  state = {
    expanded: false,
    searchStatus: {
      name: "",
      image:
        "https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
    }
  };

  /**
   * This function makes a call to a CAT API and updates the image of searchStatus from state
   */
  callCatAPI = () => {
    //Make http req
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res => {
        //Convert that response to a JSON
        return res.json();
      })
      .then(res => {
        //Then we save that cat
        let kitten = res[0];
        this.setState({
          searchStatus: {
            name: this.state.searchStatus.name,
            image: kitten.url
          }
        });
      });
  };

  getName = () => {
    const catname = Names[this.getRandomNumber(0, Names.length)];
    this.setState({
      searchStatus: {
        name: catname
      }
    });
  };

  getRandomCat = () => {
    this.getName();
    this.callCatAPI();
  };

  componentDidMount() {
    setTimeout(this.getRandomCat, 2000);
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  getRandomNumber = (inf = 1, sup = 20) => {
    return Math.floor(Math.random() * sup) + inf;
  };

  getRandomDistance = () => {
    return `${this.getRandomNumber()} km of distance`;
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.state.searchStatus.name}
          subheader={this.getRandomDistance()}
        />
        <CardMedia
          className={classes.media}
          image={this.state.searchStatus.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">{this.state.searchStatus.name}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(RecipeReviewCard);
