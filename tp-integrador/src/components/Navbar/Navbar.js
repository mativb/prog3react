
import "./Navbar.css"

import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
      <div >
        <img className="logofoto" src="./logocine.png" alt="logo"/>
      </div>
      <ul class="main-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/vertodas">Ver todas</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;