// import React, { useState, Fragment } from "react";
import React, {useState} from "react";

export function Question({
  question= '',
  response= ''
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="FAQ__question-wrapper">
      <button className="FAQ__question" onClick={() => setOpen(!open)}>
        {question}</button>
      <p className={open ? 'FAQ__response is-open' : 'FAQ__response'}>
        {response}</p>
    </div>
  );
}