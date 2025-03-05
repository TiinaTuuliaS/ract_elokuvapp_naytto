import { Link } from "react-router-dom";
import "../css/Navbar.css"


function NavBar(){
    return <nav className="navbar">
         <div className="navbar-brand">
        <Link to ="/">Elokuva appi</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Alkuun</Link>
            <Link to="/favorites" className="nav-link">Suosikit</Link>
        </div>
    </nav>
}

export default NavBar