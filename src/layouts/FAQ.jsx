// import React, { useState, Fragment } from "react";
import React from "react";

export function FAQ() {
  // const [idTab, setIdTab] = useState('buy');

  return (
    <div className="FAQ o-wrapper">
      <div className="FAQ__wrapper">

        <h2 className="FAQ__title">
          Preguntas frecuentes</h2>

        <div className="FAQ__question-wrapper">
          <h4 className="FAQ__question">
            ¿Que es un NFT?</h4>
          <p className="FAQ__response">
            Un ejemplo de un token no fungible (NFT) sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar.</p>
        </div>
        <div className="FAQ__question-wrapper">
          <h4 className="FAQ__question">
            ¿Tiene valor real un NFT?</h4>
        </div>
        <div className="FAQ__question-wrapper">
          <h4 className="FAQ__question">
            ¿Como puedo comprar un Armadillo?</h4>
        </div>
        <div className="FAQ__question-wrapper">
          <h4 className="FAQ__question">
            ¿Luego podré venderla?</h4>
        </div>

      </div>
    </div>
  );
}
