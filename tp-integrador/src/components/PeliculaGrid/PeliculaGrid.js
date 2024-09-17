import { options } from "../../options"
import {Component} from "react";

class PeliculaGrid extends Component{
constructor(props){
    super(props)
    this.state={
        pelis :[]
    }
}

componentDidMount(){
    fetch("https://api.themoviedb.org/3/account/bautipele/rated/movies")
    .then((response) => response.json())
    .then((data) => {
        this.setState({
            pelis :data.results
        })
    })
}

render(){
return(
    <>
    </>
)
}

}



export default PeliculaGrid