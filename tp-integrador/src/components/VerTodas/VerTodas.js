import { options } from "../../options"
import { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./VerTodas.css"

class VerTodas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pelis: [],
      pelisAMostrar: 4
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

  mostrarMas() {
    this.setState({
      pelisAMostrar: this.state.pelisAMostrar + 4
    });
  }

  render(props) {
    const { pelis, pelisAMostrar } = this.state;

    return (
      <section className="ver-todas-section">
        <div className="ver-todas-list">
          {pelis.slice(0, pelisAMostrar).map((peli, index) => (
            <Pelicula
              peli={peli.original_title}
              key={index}
              imagen={peli.poster_path}
              descripcion={peli.overview}
              id={peli.id}
            />
          ))}
        </div>

        {pelisAMostrar < pelis.length && (
          <button className="button-vermas" onClick={() => this.mostrarMas()}>
            Ver más
          </button>
        )}
      </section>
    )
  }
}

export default VerTodas;
