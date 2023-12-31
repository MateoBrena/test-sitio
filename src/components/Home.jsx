import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CarouselFade from "./Carousel";
import BotonWhatsapp from "./BotonWhatsapp";
import "../css/home.css";

export default function Home() {
    return (
        <>
        <Header></Header>
        <CarouselFade></CarouselFade>
        <section className="textos-inicio">
            <div>
                <h2>Misión</h2>
                <p> Que cada familia pueda cumplir el sueño de tener su casa propia.
                    Nos inspira ese momento de entregar la llave en mano a su dueño.
                </p>
            </div>
            <div>
                <h2>Materialización</h2>
                <p> Ajustaremos el diseño a tu presupuesto y estilo de vida. 
                    Cuando quedes completamente satisfecho, haremos que tome forma.
                </p>
            </div>
        </section>
        <BotonWhatsapp></BotonWhatsapp>
        <Footer></Footer>
        </>
    )
}