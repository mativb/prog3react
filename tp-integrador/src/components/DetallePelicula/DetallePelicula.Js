import React, { Component } from 'react';
import './DetallePelicula.css';

class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula: {},
            esFavorito: false
        };
    }

    componentDidMount() {
        const { IDpelicula } = this.props.match.params;

        fetch(`https://api.themoviedb.org/3/movie/${IDpelicula}?api_key=1f1b052c073a2b6b418269df7e8bb0c6`)
            .then(response => response.json())
            .then(info => {
                this.setState({ pelicula: info });
                this.chequearFavorito(info.id);
            })
            .catch(err => {
                console.error('Error fetching movie details:', err);
            });
    }
    chequearFavorito(id) {
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            const esFavorito = parsedArray.includes(id); 
            this.setState({ esFavorito }); 
        }
    }
    agregarFavorito() {
        const { pelicula } = this.state; 
        const storage = localStorage.getItem("favoritos");
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            if (!parsedArray.includes(pelicula.id)) {
                parsedArray.push(pelicula.id); 
                const stringArray = JSON.stringify(parsedArray);
                localStorage.setItem('favoritos', stringArray);
            }
        } else {
            const primerMovie = [pelicula.id]; 
            const stringArray = JSON.stringify(primerMovie);
            localStorage.setItem('favoritos', stringArray);
        }
        this.setState({
            esFavorito: true
        });
    }

    sacarFavorito() {
        const { pelicula } = this.state; 
        const storage = localStorage.getItem('favoritos');
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            const favoritosRestantes = parsedArray.filter(id => id !== pelicula.id); 
            const stringArray = JSON.stringify(favoritosRestantes);
            localStorage.setItem('favoritos', stringArray);
        }
        this.setState({
            esFavorito: false
        });
    }

    render() {
        const { pelicula, esFavorito } = this.state;
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
                
                <button onClick={() => {
                    esFavorito ? this.sacarFavorito() : this.agregarFavorito();
                }} className="boton_favorito">
                    {esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
                </button>
            </div>
        );
    }
}

export default DetallePelicula;
