import { Component } from 'react';
import "./SearchForm.css";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };  // State con un query vacío
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    });  // Actualiza el state al escribir en el input
  }

  handleInputSubmit() {
    this.props.history.push('/search', { query: this.state.query });
  }  // Envía la query a /search

  render() {
    return (
      <div className="search-form-container">
        <input 
          className="search-input"
          onChange={(e) => this.handleInputChange(e)}
          type='text'
          name="query"
          value={this.state.query}
          placeholder='Buscar película...'
        />
        <button className="search-button" onClick={() => this.handleInputSubmit()}>
          Buscar
        </button>
      </div>
    );
  }
}

export default SearchForm;
