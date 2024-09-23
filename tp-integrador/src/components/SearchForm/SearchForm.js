import { Component } from 'react'
import "./SearchForm.css"
class SearchForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }    // generamos un state con un query vacio
    }

    handleInputChange(e) {
        this.setState({
            query: e.target.value
        })// cada vez que escribo algo en el input, actualiza el state
    }
    handleInputSubmit() {
        this.props.history.push('/search', { query: this.state.query })
    }//envio la query que quiero a /search
    render() {
        return (
            <div><input onChange={(e) => this.handleInputChange(e)} type='text' name="query" value={this.state.query} placeholder='Busqueda'/>
                <button onClick={() => this.handleInputSubmit()}>Search Movie</button>
            </div>
        )
    }
}

export default SearchForm;