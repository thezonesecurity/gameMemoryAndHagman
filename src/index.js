import React from "react";
import ReactDOM from "react-dom";
import { HangManComponent } from "./apps/hangman/HangManComponent";

//GAME MEMORY
/*
import { MemoryCOmponent } from "./apps/memory/MemoryComponent";
ReactDOM.render(<MemoryCOmponent />, document.getElementById("root"));
*/
//GAME HANGMAN
ReactDOM.render(<HangManComponent />, document.getElementById("root"));
