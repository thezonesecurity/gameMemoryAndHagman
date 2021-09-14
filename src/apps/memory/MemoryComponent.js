import React, { useState, useEffect } from "react";
import { CardComponent } from "./CardComponent";
import OneCard from "./ChainOfR/OneCard";
import TwoCard from "./ChainOfR/TwoCard";
import { createBoard } from "./CreateBoard";
import GoodCards from "./GoodCards";
import "./styles.css";

let list = [];
let twice = [];
let oneCard = new OneCard();
let twoCard = new TwoCard();
let goodCards = new GoodCards();
oneCard.setNext(twoCard);
twoCard.setNext(goodCards);

export const MemoryCOmponent = () => {
  // ``
  useEffect(() => {
    list = createBoard(10);
    setStateBoard(list);
    console.log(list);
  }, []);
  //console.log(list);
  const [stateBoard, setStateBoard] = useState(list);
  // cada ves k una variable reactiva cambia de estado se actualiza el DOM,
  // return  vueve a ejecutar MemoriComponet al actualizar u selecionar => se usa useEffect
  const handlerClick = ({ id }) => {
    if (twice.length === 2) {
      twice = [];
    }
    const item = stateBoard.find((item) => item.id === id);
    oneCard.process(twice, item, stateBoard, setStateBoard);
    /* logica del juego
    if (twice.length === 2) {
      twice = [];
    }
    const item = stateBoard.find((item) => item.id === id);
    if (twice.length === 0) {
      twice = [...twice, item];
    } else if (twice.length === 1) {
      twice = [...twice, item];
      const [item1] = twice;
      if (item1.key !== item.key) {
        //si card son !=
        console.log("are different");
        setTimeout(() => {
          //ejecuta una funcion en base a un tiempo de espera
          const newStateBoard = stateBoard.map((item) => {
            if (item.done === false) {
              item.state = false;
              item.styles = "item";
            }
            return item;
          });
          setStateBoard(newStateBoard);
        }, 1000);
      } else {
        //si card son ==
        const [item1, item2] = twice;
        const newStateBoard = stateBoard.map((item) => {
          if (item.id === item1.id || item.id === item2.id) {
            item.state = true;
            item.styles = "itemColor";
          }
          return item;
        });
        setStateBoard(newStateBoard);
      }
    }
    //fin logica del juego

    const newStateBoard = stateBoard.map((item) => { //para voltear las cartas
      if (item.id === id) {
        item.state = true;
        item.styles = "itemColor";
      }
      return item;
    });
    setStateBoard(newStateBoard);
    */
  };
  return (
    <div>
      <h1>Memory App</h1>
      <hr />
      <div className="container">
        {stateBoard.map((item) => (
          <CardComponent
            key={item.id}
            item={item}
            handlerClick={handlerClick}
          />
        ))}
      </div>
    </div>
  );
};
