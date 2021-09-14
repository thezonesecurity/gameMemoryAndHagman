import LogicGame from "./LogicGame";

class TwoCard extends LogicGame {
  process(twice, item, stateBoard, setStateBoard) {
    if (twice.length === 1) {
      //twice = [...twice, item];
      twice.push(item);
      const [item1] = twice;
      if (item1.key !== item.key) {
        //si card son !=
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
        this.next.process(twice, item, stateBoard, setStateBoard);
      }
    }
  }
}
export default TwoCard;
