import { Link } from "react-router-dom"
import "../css/mobilemenu.css";

export default function MobileMenu() {
    return (
        <div id='mobile-menu'>
            <div className="dropdown" id="menu-dropdown">
                <button type="button" className="btn btn-dark"  data-bs-toggle="dropdown"><i className="fa-solid fa-bars"></i></button>
                <ul className="dropdown-menu">
                    <li><Link to="/" className="dropdown-item">Inicio</Link></li>
                    <li><Link to="/proyectos" className="dropdown-item">Proyectos</Link></li>
                    <li><Link to="/servicios" className="dropdown-item">Servicios</Link></li>
                    <li><Link to="/about" className="dropdown-item">About</Link></li>
                    <li><Link to="/contacto" className="dropdown-item">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}

/* <Dropdown>
<Dropdown.Toggle variant='dark' id="dropdown-basic">
    <i className="fa-solid fa-bars"></i>
</Dropdown.Toggle>
<Dropdown.Menu>
    <Dropdown.Item> <Link to='/'> Inicio </Link> </Dropdown.Item>
    <Dropdown.Item href="/proyectos"> Proyectos </Dropdown.Item>
    <Dropdown.Item href="/servicios"> Servicios </Dropdown.Item>
    <Dropdown.Item href="/about"> About </Dropdown.Item>
    <Dropdown.Item href="/contacto"> Contacto </Dropdown.Item>
</Dropdown.Menu>
</Dropdown> */