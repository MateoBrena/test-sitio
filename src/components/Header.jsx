import React from "react"
import { Link } from "react-router-dom"
import "../css/header.css"
import MobileMenu from "./MobileMenu"

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>
            </div>
            <MobileMenu></MobileMenu>
            <nav className="navbar">
                <Link to='/'> Inicio </Link>
                <Link to='/proyectos'> Proyectos </Link>
                <Link to='/servicios'> Servicios </Link>
                <Link to='/about'> Sobre nosotros </Link>
                <Link to='/contacto'> Contacto </Link>
            </nav>
        </header>
    )
}