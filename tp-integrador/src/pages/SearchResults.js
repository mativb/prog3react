import React from 'react';
import { Component } from 'react';
import Pelicula from '../components/Pelicula/Pelicula';
import { options } from '../options';

export class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelis: []
        };
    }

    componentDidMount() {
        const {query} = this.props.location.state;

        if (query) {

            fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, options)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({ pelis: data.results });
                });
        }
    }

    render() { 
        const { pelis } = this.state;


        return (
            <section className="pelicula_grid">
            {this.state.pelis.length > 0 ? (
              <div className="pelicula_lista">
                {pelis.slice(0, 4).map((peli, index) => (
                  <Pelicula
                    peli={peli.original_title}
                    key={index}
                    imagen={peli.poster_path}
                    descripcion={peli.overview}
                    id={peli.id}
                    className="pelicula_box"
                  />
                ))}
              </div>
            ) : (
                <div>
                <p className="loading">No hay resultados para tu busqueda</p>
                <img src='./pizzagif.webp' alt="Loading" />
                </div>
            )}
            </section>
        );
    }
}

export default SearchResults;
