import "../css/errorpage.css"
import { Link } from "react-router-dom"

export default function ErrorPage() {
    return (
        <>
            <section>
                <h1 className="titulo-error"> Ups! Hubo un error </h1>
                <p className="texto-error">La página solicitada no existe o su dirección ha cambiado. Haz click <Link to="/" className="home-link">aquí</Link> para volver al inicio</p>
                <img src="/images/foto-error-404.jpg" alt="Error 404" className="foto-error"/>
            </section>
        </>
    )
}