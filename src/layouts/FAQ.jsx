// import React, { useState, Fragment } from "react";
import React, {useState} from "react";

export function FAQ() {
  // const [idTab, setIdTab] = useState('buy');
  const [open, setOpen] = useState(true);

  return (
    <div className="FAQ o-wrapper">
      <div className="FAQ__wrapper">

        <h2 className="FAQ__title">
          Preguntas frecuentes</h2>

        <div className="FAQ__question-wrapper">
          <button className="FAQ__question" onClick={() => setOpen(!open)}>
            ¿Que es un NFT?</button>
          <p className={open ? 'FAQ__response is-open' : 'FAQ__response'}>
            Un ejemplo de un token no fungible (NFT) sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar.</p>
        </div>
        <div className="FAQ__question-wrapper">
          <button className="FAQ__question">
            ¿Tiene valor real un NFT?</button>
        </div>
        <div className="FAQ__question-wrapper">
          <button className="FAQ__question">
            ¿Como puedo comprar un Armadillo?</button>
        </div>
        <div className="FAQ__question-wrapper">
          <button className="FAQ__question">
            ¿Luego podré venderla?</button>
        </div>

      </div>
    </div>
  );
}
