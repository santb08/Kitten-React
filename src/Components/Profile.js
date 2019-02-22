/**
 * This component is made to show some basic info for the cat
 *  Main-photo (Got in props of the element)
 *  Some tastes (Favorite food, hobbies, movies...)
 *  Location
 */
import React, { Component } from "react";
/**
 * TODO
 * Importar helper randomCat.js
 * Con ese helper, mostrar la imagen del gatito, el nombre, y un par de gustos aleatorios
 * Puede crear otro archivo en el data con datos falsos y mostrarlos aleatoriamente
 * Básese en la documentación de material-ui
 */
 import App from "../App"

class Profile extends Component {  
  render() {
    const {kittyName} = App;
    console.log(kittyName);
    return (
      <div>
        <img src={``}/>
        <h1>{kittyName}</h1>
        <p>Gustos aleatorios del gato</p>
      </div>
    );
  }
}

export default Profile;
