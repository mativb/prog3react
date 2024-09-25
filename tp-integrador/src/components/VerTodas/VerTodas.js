import { options } from "../../options"
import { Component } from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./VerTodas.css"



class VerTodas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pelis: [],
      pelisAMostrar: 4,
      filtradoPelis: [],
      filtradoValue: ""
    }
  }

  componentDidMount() {
    fetch(this.props.api, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          pelis: data.results,
          filtradoPelis: data.results,

        })
      }

      )
  }

  mostrarMas() {
    this.setState({
      pelisAMostrar: this.state.pelisAMostrar + 4
    });
  }
  handleFilterChange(event) {
    const userValue = event.target.value
    this.setState({
      filtradoValue: userValue,
      filtradoPelis: this.state.pelis.filter(movie => movie.title.toLowerCase().includes(userValue.toLowerCase()))
    })
  }

  handleResetFilter() {
    this.setState({
      filtradoValue: "",
      filtradoPelis: this.state.pelis

    })
  }

  render(props) {
    const { filtradoPelis, pelisAMostrar } = this.state;

    return (
      <section className="vertodas_caja">
        <input className= "input_buscador" type="text" onChange={(event) => this.handleFilterChange(event)} value={this.state.filtradoValue} />
        <button className= "bot_reset"onClick={() => this.handleResetFilter()}>Resetear búsqueda</button>
        <div className="vertodas_lista">
          {filtradoPelis.slice(0, pelisAMostrar).map((peli, index) => (
            <Pelicula
              peli={peli.original_title}
              key={index}
              imagen={peli.poster_path}
              descripcion={peli.overview}
              id={peli.id}
             
            />
          ))}
        </div>

        {pelisAMostrar < filtradoPelis.length && (
          <button className="bot_ver_mas" onClick={() => this.mostrarMas()}>
            Ver más
          </button>
        )}
      </section>
    )
  }
}

export default VerTodas;
