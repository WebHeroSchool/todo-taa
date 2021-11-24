export const searchIndex = element => Array.prototype.indexOf.call(
  element.parentElement.children, element);

export const isSlideToDown = (indexOfMovable, indexOfStatic) => {
  if (indexOfMovable < indexOfStatic) {
    return true;
  } return false;
};

export const slideToUp = () => {

};
