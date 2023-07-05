import React from "react";
import "../hoja-de-estilo/Testimoniio.css"

function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
    <img
      className="imagen-testimonio"
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt="foto testimonio 1"/>
       <div className="contenedor-texto">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong>  en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
       </div> 

    </div> 
   
  );

}

export default Testimonio;