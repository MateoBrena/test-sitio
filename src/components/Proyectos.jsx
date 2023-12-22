import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import proyectosRepo from "../helper/proyects-helper";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../css/proyectos.css";
import { Link } from "react-router-dom"

export default function Proyectos() {

    const proyectos = proyectosRepo.getAll()

    return (
        <>
        <Header></Header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhKCCJJUp6c0g1YnBEAxT-T0cUGDsYAUr4tXXkrPLRI0o22MeI6tI_A9gHi4MoJIaLw&usqp=CAU" alt="foto-proyecto" className="d-block w-100 foto-proyectos" />
        <section className="contenedor-proyectos">
        {proyectos.proyectos.map((proyecto) => {
               return  <Card key={proyecto.id} className="tarjeta-proyecto">
               <Card.Img variant="top" src={`/images/${proyecto.portada}`} alt={`Foto portada proyecto ${proyecto.id}`}/>
               <Card.Body>
                 <Card.Title>{proyecto.nombre}</Card.Title>
                 <Card.Text>
                    {proyecto.descripcion}
                 </Card.Text>
                 <Button variant="dark"><Link to={`/proyectos/${proyecto.id}`} className="proyecto-link"> Ver proyecto </Link></Button>
               </Card.Body>
             </Card>
                    })}
        </section>
        <Footer></Footer>
        </>
    )
}