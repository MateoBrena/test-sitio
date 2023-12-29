import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BotonWhatsapp from "./BotonWhatsapp";
import archivo from "../db/servicios.pdf"
import "../css/servicios.css"

export default function Servicios() {
    return (
        <>
            <Header></Header>
            <img src="/images/banner-servicios.jpg" alt="foto-servicios" className="d-block w-100" />
            <div className="contenedor-servicios">
                <div className="primer-servicio">
                    <img src="https://media.istockphoto.com/id/929029342/es/foto/imagen-del-ingeniero-equipo-comprueba-planos-de-construcci%C3%B3n-en-el-nuevo-proyecto-con.jpg?s=612x612&w=0&k=20&c=lHzXypeAszefJkgj3_vKhXrBRyfsLUb2kpfb9gKjy7o=" alt="foto-servicio-uno" className="imagen-servicios" />
                    <div>
                        <h3> Servicio Uno </h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Dicta repudiandae magni tenetur exercitationem impedit ex earum dolor, fugiat vel quae,
                        sunt illum amet ullam. Minima alias illum mollitia praesentium nemo!
                        <p><button className="btn btn-dark descarga"><a href={archivo} download="Servicios"> Descargar </a></button></p>
                    </div>
                </div>
                <div className="segundo-servicio">
                    <img src="https://media.istockphoto.com/id/507032313/es/foto/vista-del-edificio-en-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=ztUN2DXz94JAe3MAeJMT7nyoTtR4WhBLBnf8BIRCbyk=" alt="foto-servicio-dos" className="imagen-servicios" />
                    <div>
                        <h3> Servicio Dos </h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Dicta repudiandae magni tenetur exercitationem impedit ex earum dolor, fugiat vel quae,
                        sunt illum amet ullam. Minima alias illum mollitia praesentium nemo!
                        <p><button className="btn btn-dark descarga"><a href={archivo} download="Servicios"> Descargar </a></button></p>
                    </div>
                </div>
            </div>
            <BotonWhatsapp></BotonWhatsapp>
            <Footer></Footer>
        </>
    )
}