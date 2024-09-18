import { Component } from "react";
import { Link } from "react-router-dom";
import "./Pelicula.css"

class Pelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mostrardescrip: false
        }


    }

    handleShowExtra (){
        this.setState({
            mostrardescrip:!this.state.mostrardescrip
        })
    }

    render() {

        return (
            <div className="cajaPelicula">
                <img src={`https://image.tmdb.org/t/p/w400${this.props.imagen}`} alt={this.props.peli} />
                <h2>{this.props.peli}</h2>
                <button onClick ={()=> this.handleShowExtra()}>{this.state.mostrardescrip ? "Ver menos" : "Ver más"}</button>
                <p className={this.state.mostrardescrip ? "show": "hide"}  >{this.props.descripcion}</p>

                <Link to={`/detalle/id/${this.props.id}`}>Ver detalle</Link>
        
              

               
            </div>

        )
    }



}


export default Pelicula