// import React, { useState, Fragment } from "react";
import React from "react";
import { Button } from "../components/Button";
import Parche from "../assets/parche-pirata2.png";
import Playera from "../assets/playera-peru2.png";
import Sombrero from "../assets/sombrero-duende2.png";

export function Accessories() {
  // const [idTab, setIdTab] = useState('buy');

  return (
    <div className="Accessories o-wrapper">
      
      <h3 className="Accessories__subtitle">
        COLECCIONABLES Y ÚNICOS</h3>
      <h2 className="Accessories__title">
        10K Llamas algoritmicamente generadas con 98 atributos</h2>
      <p className="Accessories__paragraph">
        Cada atributo tiene una cierta rareza. Pronto podrás revisar nuestra calificación de rarezas.</p>
      <div className="Accessories__button">
        <Button text={'Rrity Sheet PDF'}></Button>
      </div>

      <div className="Accessories__images">
        <figure>
          <img src={Parche} alt="accesorio" /></figure>
        <figure>
          <img src={Playera} alt="accesorio" /></figure>
        <figure>
          <img src={Sombrero} alt="accesorio" /></figure>
      </div>
    </div>
  );
}
