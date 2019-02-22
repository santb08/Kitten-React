//REACT
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LikeIcon from "@material-ui/icons/Favorite";
import DislikeIcon from "@material-ui/icons/Clear";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Slide from "@material-ui/core/Slide";

//HELPERS
import randomCat from "../helpers/randomCat.js";

const styles = theme => ({
  root: {
    width: "100%",
    height: "90%",
    overflow: "hidden"
  },
  card: {
    overflow: "hidden",
    position: "relative"
  },
  media: {
    paddingTop: "65%", //"56.25%" // 16:9,
    overflow: "hidden"
  }
});

class SearchResult extends React.Component {
  defaultSearching = {
    name: "...",
    image:
      "https://cdn-images-1.medium.com/max/1600/1*9EBHIOzhE1XfMYoKz1JcsQ.gif",
    distance: "...",
    hobbies: "..."
  };
  state = {
    liked: false,
    slided: false,
    searchStatus: this.defaultSearching
  };

  slideAnimation = () => {
    const showAnimation = () => {
      //Slide animation
      this.setState({ slided: !this.state.slided });
      //Set state to default
      this.setState({ searchStatus: this.defaultSearching });
    };

    new Promise((resolve) => {
      resolve(showAnimation());
    })
      .then(() => {
        const resetStatus = () => {
          this.setState({ slided: !this.state.slided });
        };
        setTimeout(resetStatus, 200);
      })
      .then(() => {
        setTimeout(this.getRandomCat, 1000);
      });
  };

  handleDislike = () => {
    this.setState({
      liked: false
    });
    this.slideAnimation();
  };

  handleLike = () => {
    this.props.addMatch(this.state.searchStatus);

    this.setState({
      liked: true
    });
    this.slideAnimation();
  };

  getRandomCat = () => {
    let image = "OA";
    const name = randomCat.getName();
    const distance = `${randomCat.getRandomDistance} km of distance`;
    const hobbiesAux = randomCat.getHobbies();
    const hobbies = `I like ${hobbiesAux[0]}, ${hobbiesAux[1]} and ${hobbiesAux[2]}`;
    randomCat.getImage().then(value => {
      image = value[0].url;
      this.setState({
        searchStatus: {
          image,
          name,
          distance,
          hobbies
        }
      });
    });
  };

  componentDidMount() {
    this.getRandomCat();
  }

  render() {
    const { classes } = this.props;
    const { liked, slided } = this.state;
    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.state.searchStatus.name}
          subheader={this.state.searchStatus.distance}
        />
        <Slide
          direction={liked ? "left" : "right"}
          in={!slided}
          mountOnEnter
          unmountOnExit
        >
          <CardMedia
            className={classes.media}
            image={this.state.searchStatus.image}
          />
        </Slide>
        <CardContent>
          <Typography component="p">{this.state.searchStatus.hobbies}</Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Like" onClick={this.handleLike}>
            <LikeIcon />
          </IconButton>
          <IconButton aria-label="Dislike" onClick={this.handleDislike}>
            <DislikeIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(SearchResult);
