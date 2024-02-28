import archivo1 from "../db/Procesos.pdf"
import archivo2 from "../db/Calidades.pdf"
import "../css/servicios.css"

export default function Servicios() {
    return (
        <>
            <img src="/images/banner-servicios.jpg" alt="foto-servicios" className="d-block w-100" />
            <div className="contenedor-servicios">
                <div className="primer-servicio">
                    <img src="/images/san-ramon-2.jpg" alt="foto-servicio-uno" className="imagen-servicios" />
                    <div>
                        <h3 className="titulo-servicio"> Procesos </h3>
                        <p className="textos-servicios">
                            En el siguiente archivpo PDF podrás ver todo sobre nuestros procesos, metodología de trabajo, presupuestos,
                            etapas de obra y valor de metro cuadrado. Además de todo lo lo que incluye nuestro presupuesto all inclusive.
                            Para descargarlo, haz click en el botón a continuación.
                        </p>
                        <p><button className="btn btn-dark descarga"><a href={archivo1} download="Procesos"> Descargar </a></button></p>
                    </div>
                </div>
                <div className="segundo-servicio">
                    <img src="/images/belgrano-4.jpg" alt="foto-servicio-dos" className="imagen-servicios" />
                    <div>
                         <h3 className="titulo-servicio"> Calidades </h3>
                         <p className="textos-servicios">
                            En el siguiente archivpo PDF podrás encontrar información sobre los materiales y calidades utilizados
                            en nuestros trabajos. Para descargarlo, haz click en el botón a continuación.
                        </p>
                        <p><button className="btn btn-dark descarga"><a href={archivo2} download="Calidades"> Descargar </a></button></p>
                    </div>
                </div>
            </div>
        </>
    )
}