import React, { useState } from "react";
import { DrawComponent } from "./components/DrawComponent";
import { KeyBoardComponent } from "./components/KeyBoardComponent";
import { WordComponent } from "./components/WordComponent";
import { useCounter } from "./hooks/useCounter";
import { useWord } from "./hooks/useWord";
import "./styles.css";
export const HangManComponent = () => {
  const [listWord, setListWord, ifContains, isValid] = useWord("game over");
  const [counter, , decrementCounter] = useCounter(6, { max: 6, min: 0 });
  //---useEffect(() => {}, [letter]);

  //--const [letter, setLetter] = useState("");
  const handlerKeyPress = (key) => {
    console.log(key);
    ifContains(key);
    if (!isValid(key)) {
      decrementCounter();
    }
    ///--setLetter(key);
  };
  return (
    <div>
      <h1>GAME HANGMAN</h1>
      <hr />
      <DrawComponent counter={counter} />
      <WordComponent listWord={listWord} />
      <KeyBoardComponent handlerKeyPress={handlerKeyPress} />
      /** 1*/
    </div>
  );
};
//2:00:00
