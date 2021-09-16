import React, { useState, useEffect } from "react";
import { CardComponent } from "./CardComponent";
import OneCard from "./ChainOfR/OneCard";
import ScoreCards from "./ChainOfR/ScoreCards";
import TwoCard from "./ChainOfR/TwoCard";
import { createBoard } from "./CreateBoard";
import GoodCards from "./GoodCards";
import "./styles.css";
let list = [];
let twice = [];
let score;
let totalCards = 20;

let oneCard = new OneCard();
let twoCard = new TwoCard();
let goodCards = new GoodCards();
let scoreCards = new ScoreCards();

oneCard.setNext(twoCard);
twoCard.setNext(goodCards);
goodCards.setNext(scoreCards);

export const MemoryCOmponent = () => {
  // ``
  useEffect(() => {
    list = createBoard(totalCards);
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
    /*
    // logica del juego
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
          const [item1, item2] = twice;
          const newStateBoard = stateBoard.map((item) => {
            if (item.done === false) {
              item.state = false;
              item.styles = "item";

              ////logica de disminuir score
              score = score - ((totalCards / totalCards) * 0.5) / 2;
              if (score === 0) {
                item.backend = "??";
                item.styles = "item";
                score = 50;
                alert("GAME OVER");
              }
            }
            return item;
          });

          // console.log("---------------------");
          // console.log(newStateBoard);
          setStateBoard(newStateBoard);
        }, 1000);
      } else {
        //si card son ==
        const [item1, item2] = twice;
        const newStateBoard = stateBoard.map((item) => {
          if (item.id === item1.id || item.id === item2.id) {
            item.state = true;
            item.styles = "itemColor";
            
            ////logica de aumentar score
            item.done = true;
            if (item.done === item1.done && item.done === item2.done) {
              score = score + 25;
              item.score = true;
              console.log("s " + score);
            }
            //
          }
          return item;
        });
        //console.log("+++++++++++");
        //console.log(newStateBoard);
        setStateBoard(newStateBoard);
      }
    }
    //fin logica del juego
*/
    const newStateBoard = stateBoard.map((item) => {
      //para voltear las cartas
      if (item.id === id) {
        item.state = true;
        item.styles = "itemColor";
      }
      return item;
    });
    setStateBoard(newStateBoard);
  };
  return (
    <>
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
      <div className="containerButtom">
        <button className="containerButtom"> ESCORE: {score}</button>
      </div>
    </>
  );
};
