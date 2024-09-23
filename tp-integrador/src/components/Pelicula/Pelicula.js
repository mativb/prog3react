import { Component } from "react";
import { Link } from "react-router-dom";
import "./Pelicula.css"

class Pelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrardescrip: false,
            esFavorito: false,
            name: this.props.name,
            id: this.props.id
        }


    }

    handleShowExtra() {
        this.setState({
            mostrardescrip: !this.state.mostrardescrip
        })
    }
    componentDidMount() {
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {
            const parsedArray = JSON.parse(storage)
            const estaEnFavoritos = parsedArray.includes(this.props.id)
            this.setState({
                esFavorito: estaEnFavoritos
            })
        }

    }
    agregarFavorito() {
        const storage = localStorage.getItem("favoritos")
        if (storage !== null) {//si existe el storage
            const parsedArray = JSON.parse(storage)
            parsedArray.push(this.props.id)
            const stringArray = JSON.stringify(parsedArray)
            localStorage.setItem('favoritos', stringArray)
        } else {
            const primerMovie = [this.props.id]
            const stringArray = JSON.stringify(primerMovie)
            localStorage.setItem('favoritos', stringArray)
        }
        this.setState({
            esFavorito: true
        })

    }
    sacarFavorito() {
        const storage = localStorage.getItem('favoritos')
        const parsedArray = JSON.parse(storage)
        const favoritosRestantes = parsedArray.filter(id => id !== this.props.id)
        const stringArray = JSON.stringify(favoritosRestantes)
        localStorage.setItem('favoritos', stringArray)
        this.setState({
            esFavorito: false
        })
    }


    render() {

        return (
            <div className="cajaPelicula">
                <img src={`https://image.tmdb.org/t/p/w400${this.props.imagen}`} alt={this.props.peli} />
                <h2 className="titulopeli">{this.props.peli}</h2>
                <button onClick={() => this.handleShowExtra()}>{this.state.mostrardescrip ? "Ver menos" : "Ver más"}</button>
                <p className={this.state.mostrardescrip ? "show" : "hide"}  >{this.props.descripcion}</p>

                <Link to={`/detalle/id/${this.props.id}`} className="verdetalle">Ver detalle</Link>

                <button onClick={() => {
                    this.state.esFavorito ? this.sacarFavorito() : this.agregarFavorito();
                }}>{!this.state.esFavorito ? "Agregar a favoritos" : "Quitar de favoritos"}</button>



            </div>

        )
    }



}


export default Pelicula