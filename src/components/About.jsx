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
                    <img src="https://media.licdn.com/dms/image/D4D03AQEgGWS-HgAz3Q/profile-displayphoto-shrink_400_400/0/1702486680181?e=1708560000&v=beta&t=NLXPdGIOdCoaagZr66Dg9XAm1n2UXNMU-iU0fZuRx48" alt="foto-about" />
                </div>
                <div className="texto-about">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id odit vitae vel ipsam, esse illum dignissimos distinctio neque qui possimus mollitia expedita itaque.
                        Impedit odio cumque nemo iusto aspernatur tempora? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Dicta ratione in placeat magnam molestias pariatur possimus perferendis quaerat minima reiciendis hic a quibusdam,
                        voluptate corrupti consequuntur rem, ipsa laboriosam impedit!
                    </p>
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}