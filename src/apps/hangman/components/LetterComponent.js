import React, { useState } from "react";
const sumar = (nro) => {
  nro = nro + 1;
  return nro;
};
export const LetterComponent = ({ letter, status, item, palabra }) => {
  // ..... LABORATORIO 3 JUEGO TERMINADO ..........
  //console.log(letter, status, item, palabra);
  item = { ...item, counter: 0 };
  //console.log(item);
  let sum = sumar(0);
  if (palabra.includes(item) || status) {
    item = { ...item, counter: sum };
    console.log(item);
    if (item.counter === palabra.length) {
      alert("CONGRATULATIONS");
    }
    // console.log(sum);
  }
  return <div>{status ? letter : "??"}</div>;
};
