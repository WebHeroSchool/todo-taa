export const searchIndex = element => Array.prototype.indexOf.call(
  element.parentElement.children, element);


export const isSlideToDown = (indexOfMovable, indexOfStatic) => {
  if (indexOfMovable < indexOfStatic) {
    return true;
  } return false;
};


export const shift = (pointer, thisElement, height, lastModify = false) => {
  if (thisElement !== pointer
      || (thisElement === pointer && lastModify)) {
    thisElement.style.transform = `translateY(${height ?
      height + 8 : height}px)`;
  }
  let next;
  if (height) {
    next = thisElement.nextElementSibling;
  } else {
    next = thisElement.previousElementSibling;
  }

  if (next) {
    shift(pointer, next, height, lastModify);
  }
};


export const setTransition = (element, time = 0) => {
  element.style.transition = `transform ${time}s ease-out`;

  const next = element.nextElementSibling;
  if (next) {
    setTransition(next, time);
  }
};
