import React from "react";
//import { useWord } from "../hooks/useWord";
import { LetterComponent } from "./LetterComponent";

export const WordComponent = ({ listWord, palabra }) => {
  //maneja y compara las lertras
  /*---
  const [listWord, , ifContains] = useWord("game over");
  useEffect(() => {
    ifContains(letter);
  }, [letter]);
  
  if (letter !== "") {
    ifContains(letter);
  }
  */
  return (
    <div className="word">
      {listWord.map((item) => (
        //<div>{item.letter}</div>
        <LetterComponent
          key={item.id}
          letter={item.letter}
          status={item.status}
          //
          item={item}
          palabra={palabra}
          //
        /> // {...item} /> //oculta las cartas
      ))}
    </div>
  );
};
