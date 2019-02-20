/**
 * This component is the searcher located at the right of the page
 * The idea is that this component will render the kittens got from an API
 * This class has is in charge of handle the user decissions
 */
import React, { Component } from "react";
import SearchInfo from "./SearchInfo.js";

class Searcher extends Component {
  render() {
    return <SearchInfo />;
  }
}

export default Searcher;
