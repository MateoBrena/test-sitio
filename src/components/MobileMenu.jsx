import { Link } from "react-router-dom"
import "../css/mobilemenu.css";

export default function MobileMenu() {
    return (
        <div id='mobile-menu'>
            <div className="dropdown" id="menu-dropdown">
                <button type="button" className="btn btn-dark"  data-bs-toggle="dropdown" aria-label="menu"><i className="fa-solid fa-bars"></i></button>
                <ul className="dropdown-menu">
                    <li><Link to="/" className="dropdown-item">Inicio</Link></li>
                    <li><Link to="/proyectos" className="dropdown-item">Proyectos</Link></li>
                    <li><Link to="/servicios" className="dropdown-item">Servicios</Link></li>
                    <li><Link to="/about" className="dropdown-item">Sobre Nosotros</Link></li>
                    <li><Link to="/contacto" className="dropdown-item">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}