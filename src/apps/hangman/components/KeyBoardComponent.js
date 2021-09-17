import React from "react";
import { useKeyBoard } from "../hooks/useKeyBoard";
import { KeyComponet } from "./KeyComponet";

export const KeyBoardComponent = ({ handlerKeyPress }) => {
  const [KeyBoard, setKeyBoard] = useKeyBoard();
  //console.log(KeyBoard);
  const handlerKey = (key) => {
    //devuelve la letra que se a presionado
    const newKeyBoard = KeyBoard.map((item) => {
      const { key: keyList } = item;
      if (key === keyList) {
        item.status = true;
      }
      return item;
    });
    console.log(newKeyBoard);
    setKeyBoard(newKeyBoard);
    handlerKeyPress(key); //2
  };
  return (
    <div className="flex-container">
      {KeyBoard.map((item) => (
        //return <div>{item.key}</div>; ->se imprime las letras
        <KeyComponet
          key={item.id}
          letter={item.key}
          handlerKey={handlerKey}
          status={item.status}
        />
      ))}
    </div>
  );
};
