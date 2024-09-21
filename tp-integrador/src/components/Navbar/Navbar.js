
import "./Navbar.css"

import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="nav">
      <div >
        <img className="logofoto" src="./logocine.png" alt="logo"/>
      </div>
      <ul className="main-nav">
        <li className="links"><Link to="/">Home</Link></li>
        <li className="links"><Link to="/favoritos">Favoritos</Link></li>
        <li className="links"><Link to="/vertodas">Ver todas</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;