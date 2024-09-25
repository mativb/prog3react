import React, { Component } from 'react';
import './DetallePelicula.css'
class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: {}
        };
    }

    componentDidMount() {
        const { IDpelicula } = this.props.match.params;
        
        fetch(`https://api.themoviedb.org/3/movie/${IDpelicula}?api_key=1f1b052c073a2b6b418269df7e8bb0c6`)
            .then(response => response.json())
            .then(info => {
                this.setState({ pelicula: info });
            })
            .catch(err => {
                console.error('Error fetching movie details:', err);
            });
    }

    render() {
        const { pelicula } = this.state;

        const { poster_path, title, vote_average, release_date, runtime, overview, genres } = pelicula;

        return (
            <div className='detalle-pelicula'>
                {poster_path && (
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
                )}
                <h2>{title}</h2>
                <p>Rating: {vote_average}</p>
                <p>Fecha de estreno: {release_date}</p>
                <p>Duración: {runtime} minutos</p>
                <p>Sinopsis: {overview}</p>
                <p>Género: {genres && genres.map(genre => genre.name).join(', ')}</p>
            </div>
        );
    }
}

export default DetallePelicula
