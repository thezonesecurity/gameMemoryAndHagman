import React from "react";

export const KeyComponet = ({ letter, handlerKey, status }) => {
  //retorna las letras
  return (
    <div
      className={status ? "disablediv" : ""}
      onClick={() => {
        handlerKey(letter);
      }}
    >
      {letter}
    </div>
  );
};
