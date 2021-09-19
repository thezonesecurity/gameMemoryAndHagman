import { useState } from "react";

export const useKeyBoard = () => {
  const generateKeyBoard = () => {
    //genera letras
    let keyList = [];
    //let tam=0;
    for (let i = 0; i < 26; i++) {
      /// agrega la tecla espacio
      /*
      if (i + 1 == 26) {
        keyList = [
          ...keyList,
          { key: "ESPACE", status: false, id: "key_" + (i + 1) },
        ];
      }*/
      let key = String.fromCharCode(i + 65);
      keyList = [...keyList, { key, status: false, id: "key_" + i }];
    }

    //console.log(keyList);

    return keyList;
  };
  ///ejecuta el hook creado y los ejecuta en una variable de stado
  const [KeyBoard, setKeyBoard] = useState(generateKeyBoard());
  return [KeyBoard, setKeyBoard];
};
