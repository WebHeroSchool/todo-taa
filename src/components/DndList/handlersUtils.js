export const searchIndex = element => Array.prototype.indexOf.call(
  element.parentElement.children, element);


export const isSlideToDown = (indexOfMovable, indexOfStatic) => {
  if (indexOfMovable < indexOfStatic) {
    return true;
  } return false;
};


export const setElementPosition = (element, offsetY) => {
  const delta = offsetY - (element.offsetHeight * .5);

  return element.style.transform = `translateY(${delta}px)`;
};


export const shift = (pointer, thisElement, height, lastModify = false) => {
  if (thisElement !== pointer
      || (thisElement === pointer && lastModify)) {
    thisElement.style.transform = `translateY(${height ?
      height + 16 : height}px)`;
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


export const getHeight = element => {
  let height;
  if (element.style.transform.length < 16) {
    height = element.offsetHeight;
  } else {
    height = 0;
  }

  return height;
};


export const endOfGesture = (element, setElement, setTriggeredElement) => {
  element.style.width = '';
  element.style.position = '';
  element.style.pointerEvents = '';
  shift(element, element.parentElement.lastElementChild, 0, true);
  setTransition(element.parentElement.firstElementChild, 0);
  setElement(null);
  setTriggeredElement(null);
};
