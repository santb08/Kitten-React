/**
 * This component is made to show some basic info for the cat
 *  Main-photo (Got in props of the element)
 *  Some tastes (Favorite food, hobbies, movies...)
 *  Location
 */
import React, { Component } from "react";
import helper from "../helpers/randomCat"
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
    avatar: {
        margin: "auto",
        width: 300,
        height: 280,
    }
};


/**
 * TODO
 * Importar helper randomCat.js
 * Con ese helper, mostrar la imagen del gatito, el nombre, y un par de gustos aleatorios
 * Puede crear otro archivo en el data con datos falsos y mostrarlos aleatoriamente
 * Básese en la documentación de material-ui
 */

class Profile extends Component {
    state = {
        name: "...",
        image: "OA",
        hobbies: "..."
    };

    componentDidMount(){
        const name = helper.getName();
        const hobbies = helper.getHobbies();
        let image = '';
        helper.getImage().then(value => {
            image = value[0].url;
            this.setState({
                name,
                hobbies,
                image
            });
        });
    }

    render() {
        const { name, image, hobbies } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <Avatar alt={name} src={image} className={classes.avatar} />
                <p>{`Your hobbies: ${hobbies[0]}, ${hobbies[1]} and ${hobbies[2]}.`}</p>
            </div>
        );
      }
}

export default withStyles(styles)(Profile);
