// import React, { useState, Fragment } from "react";
import React from "react";
import { Button } from "../components/Button";
import Armadillo from "../assets/armadillo.png";
import ParchePirata from "../assets/parche-pirata.png";
import PlayeraPeru from "../assets/playera-peru.png";
import SombreroDuende from "../assets/sombrero-duende.png";

export function Description() {
  // const [idTab, setIdTab] = useState('buy');

  return (
    <div className="Description o-wrapper">
      <div className="Description__wrapper">

        <figure className="Description__figure">
          <img className="Description__image" src={Armadillo} alt="Armadillo" />
          <img className="Description__image" src={ParchePirata} alt="Parche Pirata" />
          <img className="Description__image" src={PlayeraPeru} alt="Playera Peru" />
          <img className="Description__image" src={SombreroDuende} alt="Sombrero Duende" />
        </figure>

        <div className="Description__content">
          <p className="Description__paragraph">
            En el año 3078, hubo un armagedón que borró a la humanidad y todos los seres vivos de la faz de la tierra. Sin embargo, solo una especie logró sobrevivir... Las llamas peruanas.
          </p>
          <p className="Description__paragraph">
            10, 000 llamas peruanas para ser exactos. Sí, en los escombros de Machu Picchu, las llamas se refugiaron, y la magia del santuario Inka las protegió frente a los miles de meteoritos e invasores alienígenas que cayeron en la Tierra. Fue así que poco a poco, las llamas comenzaron a evolucionar para sobrevivir en un planeta que estaba totalmente destruido...
          </p>
          <div className="Description__button">
            <Button text={'Ver más'}></Button>
          </div>
        </div>

      </div>
    </div>
  );
}
