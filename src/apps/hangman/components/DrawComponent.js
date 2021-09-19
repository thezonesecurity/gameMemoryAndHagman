import React from "react";
//import { useCounter } from "../hooks/useCounter";

export const DrawComponent = ({ counter }) => {
  //es para mostrar las imagenes
  return (
    <div>
      <img src={`/assets/img${counter}.png`} alt="" width="360" height="200" />
    </div>
  );
};
