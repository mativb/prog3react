import React, { Component } from 'react';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],     
            isLoading: true   
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true  
        });
        const storage = localStorage.getItem('favoritos');  
        if (storage !== null) {
            const parsedArray = JSON.parse(storage);
            // Usamos promise.all para obtener todas las películas
            Promise.all(
                parsedArray.map((id) => {
                    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1f1b052c073a2b6b418269df7e8bb0c6`)
                        .then(response => response.json())
                })
            )
            .then((movies) => {
                this.setState({
                    movies: movies,
                    isLoading: false   
                });
            })
            .catch(error => {
                console.error('Error buscando peliculas:', error);
                this.setState({
                    isLoading: false  
                });
            });
        } else {
            this.setState({
                isLoading: false
            });
        }
    }
    sacarFavorito(id) {
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(idFavorito => idFavorito !== id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({
            esFavorito: false,
            movies: this.state.movies.filter(movie=>movie.id !== id)
        })
    }
    render() {
        return (
            <div>
                {!this.state.isLoading ? (
                    <>Grilla de tus películas favoritas
                        {}
                        <div className="movie-grid">
                            {this.state.movies.length > 0 ? (this.state.movies.map((movie) => (
                                <div key={movie.id} className="movie-item">
                                    <h3>{movie.title}</h3>
                                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} />
                                    <button onClick={() => this.sacarFavorito(movie.id)}>
                                            Eliminar de favoritos
                                        </button>
                                </div>
                            ))
                        ) : (
                            <p>No tienes películas favoritas seleccionadas.</p>
                        )}
                            
                            
                        </div>
                    </>
                ) : (
                    <p>Loading..</p>
                )}
            </div>
        );
    }
}

export default Favoritos;
