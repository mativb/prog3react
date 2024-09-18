import { options } from "../../options"
import {Component} from "react";
import Pelicula from "../Pelicula/Pelicula";
import "./PeliculaGrid.css"

class PeliculaGrid extends Component{
constructor(props){
    super(props)
    this.state={
        pelis :[]
    }
}

componentDidMount(){
    fetch( this.props.api  , options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        this.setState({
            pelis :data.results
        })
    })
    
}

render(){
return(
    <section className="top-data">
    {this.state.pelis.length > 0 ? (
        this.state.pelis.slice(0,5).map((peli,index)=> (
            <Pelicula peli = {peli.original_title} key = {index} imagen = {peli.poster_path} descripcion = {peli.overview}/>
        ))
    ) : (<p> Loading...</p>)}    
    </section>
)
}

}



export default PeliculaGrid