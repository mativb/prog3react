import { options } from "../../options"
import { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculaGrid.css"
import { Link } from "react-router-dom";

class PeliculaGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pelis: []
    }
  }

  componentDidMount() {
    fetch(this.props.api, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          pelis: data.results
        })
      })
  }

  render(props) {
    return (
      <section className="pelicula_grid">
        {this.state.pelis.length > 0 ? (
          <div className="pelicula_lista">
            {this.state.pelis.slice(0, 4).map((peli, index) => (
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
          <p className="loading">Loading...</p>
        )}

        <Link className="ver_todas" to={this.props.link}>
          <h3>Ver todas</h3>
        </Link>
      </section>
    )
  }
}

export default PeliculaGrid;
