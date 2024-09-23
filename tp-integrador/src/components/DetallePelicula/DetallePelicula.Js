import React, { Component } from 'react'

export default class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pelicula: {}
        }
    }
    componentDidMount() {
        const { IDpelicula } = this.props.match.params;
        fetch(`https://api.themoviedb.org/3/movie/${pelicula.id}?api_key=1f1b052c073a2b6b418269df7e8bb0c6`)
            .then(info => {
                this.setState({ pelicula: info }) //traigo la informacion de moviedb y la pongo dentro de movie
            }).then(response => response.json())
            .catch(console.error(err));

    }
    render() {
        const { pelicula} = this.state;
        const { foto, title, rating, release_date, duracion, sinopsis, genre } = pelicula

        return (
            <div className='detalle-pelicula'>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                <h2>{title}</h2>
                <p>Rating: {rating} </p>
                <p>Fecha de estreno: {release_date} </p>
                <p>Duracion: {duracion} </p>
                <p>Sinopsis: {sinopsis} </p>
                <p>Genero: {genre && genre.map(genre => genre.name).join(', ')} </p>


            </div>

        )
    }
}
