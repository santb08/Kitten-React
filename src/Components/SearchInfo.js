/**
 * This component is made to show some basic info for the cat
 *  Main-photo (Got in props of the element)
 *  Some tastes (Favorite food, hobbies, movies...)
 *  Location
 */
import React, { Component } from "react";
import SearchPhoto from "./SearchPhoto.js";

class SearchInfo extends Component {
  render() {
    return <SearchPhoto />;
  }
}

export default SearchInfo;
