/**
 * This component is made to show some basic info for the cat
 *  Main-photo (Got in props of the element)
 *  Some tastes (Favorite food, hobbies, movies...)
 *  Location
 */
import React, { Component } from "react";
import helper from "../helpers/randomCat"
/**
 * TODO
 * Importar helper randomCat.js
 * Con ese helper, mostrar la imagen del gatito, el nombre, y un par de gustos aleatorios
 * Puede crear otro archivo en el data con datos falsos y mostrarlos aleatoriamente
 * Básese en la documentación de material-ui
 */

class Profile extends Component {
  render() {
    const name = helper.getName();
    const hobbies = helper.getHobbies();
    let image = '';
    helper.getImage().then(value => {
      image = value[0].url;
      });
    return (
      <div>
        <h1>{name}</h1>
        <img src={image}/>
        <p>{`My hobbies: ${hobbies[0]}, ${hobbies[1]} and ${hobbies[2]}.`}</p>
      </div>
    );
  }
}

export default Profile;
