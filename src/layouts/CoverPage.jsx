// import React, { useState, Fragment } from "react";
import React from "react";
import { Button } from "../components/Button";
import Background from "../assets/armadillos.png";

export function CoverPage() {
  // const [idTab, setIdTab] = useState('buy');

  return (
    <div className="CoverPage o-wrapper">
      
      <img className="CoverPage__background" src={Background} alt="Logo" />

      <div className="CoverPage__content">
        <p className="CoverPage__subtitle">RISK-FREE 30 DAY TRIAL</p>
        <h2 className="CoverPage__title">
          Bienvenidos a la revolución</h2>
        <p className="CoverPage__paragraph">
          <strong>Armadillo.io</strong> es una colección de 10,000 NFT's coleccionables digitales únicos que viven en la cadena de bloques de Ethereum.</p>
        <div className="CoverPage__button">
          <Button text={'Compra en Armadillo.io'}></Button>
        </div>
      </div>

      <div className="CoverPage__socials"></div>

    </div>
  );
}
