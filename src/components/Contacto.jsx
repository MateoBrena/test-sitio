import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/contacto.css"

export default function Contacto() {
    return (
        <>
            <Header></Header>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhKCCJJUp6c0g1YnBEAxT-T0cUGDsYAUr4tXXkrPLRI0o22MeI6tI_A9gHi4MoJIaLw&usqp=CAU" alt="foto-contacto" className="d-block w-100" />
            <section className="contacto">
                <div className="contenedor-contacto">
                    <div className="contenedor-mail">
                        <div className="icono-mail">
                            <i className="fa-solid fa-envelope icons"></i>
                        </div>
                        <div>
                            <h4>Email</h4>
                        </div>
                        <div>
                            <p> direccion@gmail.com </p>
                        </div>
                    </div>
                    <div className="contenedor-telefono">
                        <div className="icono-telefono">
                            <i className="fa-solid fa-phone icons"></i>
                        </div>
                        <div>
                            <h4>Teléfono</h4>
                        </div>
                        <div>
                            <p> +54 9 11 1112-3334 </p>
                        </div>
                    </div>
                    <div className="contenedor-ubicacion">
                        <div className="icono-ubicacion">
                            <i className="fa-solid fa-compass icons"></i>
                        </div>
                        <div>
                            <h4>Estudio</h4>
                        </div>
                        <div>
                            <p> Maschwitz Country Club </p>
                        </div>
                    </div>
                </div>
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.9392709943495!2d-58.760882217391206!3d-34.37746480351214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca0212f1c9487%3A0xbbbdc63ff9b1566!2sMaschwitz%20Country%20Club!5e0!3m2!1ses-419!2sar!4v1702931980802!5m2!1ses-419!2sar" width="600" height="450"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="direccion"></iframe>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}