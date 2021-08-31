/*
*
* Функция принимает компоненты
* и возвращает массив который будет передан в .map()
*
*/


export const toArray = obj => {
  if (Array.isArray(obj)) {
    return obj;
  } return [
    obj,
  ];
};

export default toArray;
