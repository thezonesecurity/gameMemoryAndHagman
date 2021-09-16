import LogicGame from "./LogicGame";

class ScoreCards extends LogicGame {
  process(score, twice, item, stateBoard, setStateBoard) {
    ////logica de aumentar score
    const [item1, item2] = twice;
    const newStateBoard = stateBoard.map((item) => {
      if (item.done === item1.done && item.done === item2.done) {
        score = score + 25;
        item.score = true;
      } else {
        ////logica de disminuir score
        score = score - 5; //((totalCards / totalCards) * 0.5) / 2;
        if (score === 0) {
          item.backend = "??";
          item.styles = "item";
          score = 50;
          alert("GAME OVER");
        }
      }
      return item;
    });
    console.log(score);
    setStateBoard(newStateBoard);
  }
}
export default ScoreCards;
