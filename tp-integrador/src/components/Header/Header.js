import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img className="logofoto" src="./logocine.png" alt="logo" />
      </div>
      <ul className="main-nav">
        <li className="links"><Link to="/">Home</Link></li>
        <li className="links"><Link to="/favoritos">Favoritos</Link></li>
        <li className="links"><Link to="/rating">Rating</Link></li>
        <li className="links"><Link to="/proximamente">Proximamente</Link></li>
        
      </ul>
    </nav>
  )
}

export default Header;
