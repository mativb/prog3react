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
      <section className="peliculaGrid">
        {this.state.pelis.length > 0 ? (
          <div className="peliculaLista">
            {this.state.pelis.slice(0, 4).map((peli, index) => (
              <Pelicula
                peli={peli.original_title}
                key={index}
                imagen={peli.poster_path}
                descripcion={peli.overview}
                id={peli.id}
                className="peliculaBox"
              />
            ))}
          </div>
        ) : (
          <p className="loading">Loading...</p>
        )}

        <Link className="verTodas" to={this.props.link}>
          <h3>Ver todas</h3>
        </Link>
      </section>
    )
  }
}

export default PeliculaGrid;
