// import React, { useState, Fragment } from "react";
import React from "react";

export function Button({
  text= ''
}) {
  // const [idTab, setIdTab] = useState('buy');

  return (
    <button className="c-button">
      {text}
    </button>
  );
}
