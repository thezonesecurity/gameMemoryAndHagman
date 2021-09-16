export const createBoard = (card) => {
  if (card % 2 != 0) {
    throw new Error("Es  necesario un numero par de elementos...");
  }
  let listBoard = [];
  let count = 0;
  for (let i = 0; i < card / 2; i++) {
    //genera n palabras pares iguales
    let simbols = String.fromCharCode(65 + count); // fromCharCode => método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
    let item1 = {
      backend: "??",
      fronted: simbols,
      state: false,
      done: false,
      key: `card_${i}`,
      styles: "item",
      score: false,
    };
    let item2 = { ...item1 };
    listBoard = [...listBoard, item1, item2];
    count++;
  }
  for (let i = 0; i < listBoard.length; i++) {
    // mescla los pares de letras
    let index = Math.ceil(Math.random() * listBoard.length - 1); //Math.ceil -> saca valores correctos
    let item = listBoard[index];
    listBoard[index] = listBoard[i];
    listBoard[i] = item;
  }
  listBoard = listBoard.map((item, index) => {
    //agrega un id a la lista
    item = { id: index, ...item };
    return item;
  });
  return listBoard;
};
//export default createBoard;
