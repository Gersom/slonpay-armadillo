// import React, { useState, Fragment } from "react";
import React from "react";
import { Question } from "../components/Question";

export function FAQ() {

  return (
    <div className="FAQ o-wrapper">
      <div className="FAQ__wrapper">

        <h2 className="FAQ__title">
          Preguntas frecuentes</h2>

        <Question 
        question='¿Que es un NFT?' 
        response='Un ejemplo de un token no fungible (NFT) sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar.'
        ></Question>

        <Question 
        question='¿Tiene valor real un NFT?' 
        response='Un ejemplo de un token no fungible (NFT) sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar.'
        ></Question>

        <Question 
        question='¿Como puedo comprar un Armadillo?' 
        response='Un ejemplo de un token no fungible (NFT) sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar.'
        ></Question>

        <Question 
        question='¿Luego podré venderla?' 
        response='Un ejemplo de un token no fungible (NFT) sería una obra de arte. Si tienes un cuadro en casa, este no se consume al utilizarse y tampoco puede ser sustituido por otro cuadro. Una obra de arte no es equivalente a otra, y por lo tanto, no se pueden simplemente intercambiar.'
        ></Question>

      </div>
    </div>
  );
}
