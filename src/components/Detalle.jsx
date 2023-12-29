import React, { useState } from "react";
import proyectosRepo from "../helper/proyects-helper";
import { useParams } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal.js";
import "../css/modal.css";
import "../css/detalle.css";

export default function Detalle() {

  const proyectos = proyectosRepo.getAll()
  let { id } = useParams()
  const elProyecto = proyectos.proyectos.filter((proyecto) => proyecto.id === parseInt(id))

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (plano, index) => {
    setCurrentIndex(index);
    setClickedImg(plano.link);
  };

  const handleRotationRight = () => {
    const totalLength = elProyecto[0].planos.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = elProyecto[0].planos[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = elProyecto[0].planos.filter((plano) => {
      return elProyecto[0].planos.indexOf(plano) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = elProyecto[0].planos.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = elProyecto[0].planos[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = elProyecto[0].planos.filter((plano) => {
      return elProyecto[0].planos.indexOf(plano) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <Header></Header>
      <section className="contenedor-detalle">
        <div className="contenedor-portada">
          <div className="descripcion-proyecto">
            <h1>{elProyecto[0].nombre}</h1>
            <h3>{elProyecto[0].cubierta}</h3>
            <h3>{elProyecto[0].semicubierta}</h3>
            <p>{elProyecto[0].descripcion}</p>
          </div>
          <img src={`/images/${elProyecto[0].portada}`} alt={`Foto portada proyecto ${elProyecto[0].id}`} />
        </div>
        <div className="wrapper">
          {elProyecto[0].planos.map((plano, index) => (
            <div className="wrapper-images" key={index + 1}>
              <img src={plano.link} alt={plano.texto} onClick={() => handleClick(plano, index)}></img>
              <h4 className="descripcion-foto">{plano.texto}</h4>
            </div>
          ))}
        </div>
        <div>
          {clickedImg && (
            <Modal
              clickedImg={clickedImg}
              handleRotationRight={handleRotationRight}
              setClickedImg={setClickedImg}
              handleRotationLeft={handleRotationLeft}
            />
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  )
}