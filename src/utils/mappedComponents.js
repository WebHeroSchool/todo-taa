/*
* Функция принимает массив компонентов
* и возвращает JSX со свойством key.
*
* Использование предполагается совместно с HOC
* в которых не предполагпется изменение порядка
* компонентов.
*
* Если в функцию прешел не массив, то вспомогательная
* функция toArray конвертирует пришедший объект в массив.
*/


const toArray = obj => {
  if (Array.isArray(obj)) {
    return obj;
  } return [
    obj,
  ];
};


const mappedComponents = components => (
  toArray(components).map(
    (Component, index) => (
      <Component key={index} />
    )
  )
);


export default mappedComponents;
