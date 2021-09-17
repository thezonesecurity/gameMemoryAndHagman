import { useState } from "react";

export const useKeyBoard = () => {
  const generateKeyBoard = () => {
    //genera letras
    let keyList = [];
    for (let i = 0; i < 26; i++) {
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
//53:00
