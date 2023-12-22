import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/about.css"

export default function About() {
    return (
        <>
            <Header></Header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhKCCJJUp6c0g1YnBEAxT-T0cUGDsYAUr4tXXkrPLRI0o22MeI6tI_A9gHi4MoJIaLw&usqp=CAU" alt="foto-about" className="d-block w-100" />
            <section className="contenedor-about">
                <div className="imagen-about">
                    <img src="/images/foto-about.jpg" alt="foto-sobre-nosotros" />
                </div>
                <div className="texto-about">
                    <h3 className="arquitecto">Arquitecto: Gustavo Canevaro</h3>
                    <p>
                        Desde hace mas de 25 años hacemos lo que nos
                        apasiona, concretar proyectos en diferentes áreas
                        de la arquitectura, diseño interior, diseño de
                        mobiliario, ingeniería y construcciones tanto
                        públicas como privadas.
                    </p>
                    <p>
                        Creemos que el mejor diseño viene de un enfoque
                        completamente integrado, desde su concepción
                        hasta su finalización. Nos inspira la tarea grupal,
                        sumar profesionales de otras actividades afines
                        desde el interiorismo o el diseño de mobiliario
                        hasta la valuación y análisis de inversión
                        inmobiliaria.
                    </p>
                    <p>
                        Nuestro compromiso es interpretar y brindar la
                        adecuada respuesta a los requerimientos de cada
                        una de nuestros clientes del ámbito empresarial y
                        privado.
                    </p>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}