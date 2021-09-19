import React from "react";
import { flushSync } from "react-dom";
import { DrawComponent } from "./components/DrawComponent";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { WordComponent } from "./components/WordComponent";
import { useCounter } from "./hooks/useCounter";
import { useWord } from "./hooks/useWord";
import "./styles.css";
let palabra = "game";
export const HangManComponent = () => {
  const [listWord, , ifContains, isValid] = useWord(palabra);
  const [counter, , decrementCounter, resetCounter] = useCounter(6, {
    max: 6,
    min: 0,
  });

  const handlerKeyPress = (key) => {
    //console.log(key);
    ifContains(key);
    if (!isValid(key)) {
      decrementCounter();
    }

    //console.log(listWord);
    //---- mostrar un mensaje de GAME OVER-----////
    if (counter === 0) {
      resetCounter();
      alert("GAME OVER");
    }
    //---- fin mostrar un mensaje de GAME OVER-----////
  };

  return (
    <div>
      <h1>GAME HANGMAN</h1>
      <button className="word div">Score: </button>
      <hr />
      <DrawComponent counter={counter} />
      <WordComponent listWord={listWord} palabra={palabra} />
      <KeyBoardComponent handlerKeyPress={handlerKeyPress} />
    </div>
  );
};
