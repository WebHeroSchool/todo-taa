import styles from '../TodoItem/TodoItem.module.css';


export const setElementPosition = (element, pageY) => {
  const delta = pageY - element.offsetTop - (element.offsetHeight * .5)
    - document.scrollingElement.scrollTop;

  return element.style.transform = `translateY(${delta}px)`;
};


export const shift = (
  pointer,
  thisElement,
  height,
) => {
  thisElement.style.transform = `translateY(${height ?
    height + 16 : height}px)`;
  let next;
  if (height) {
    next = thisElement.nextElementSibling;
  } else {
    next = thisElement.previousElementSibling;
  }

  if (next) {
    shift(pointer, next, height);
  }
};


export const getHeight = (elementUnderPointer, element) => {
  let height;
  if (elementUnderPointer.style.transform.length < 16) {
    height = element.offsetHeight;
  } else {
    height = 0;
  }

  return height;
};


export const endOfGesture = (
  element,
  setElement,
  ulElement,
  stopInterval,
  intervalId,
) => {
  ulElement.current.style.cursor = 'auto';
  ulElement.current.querySelectorAll('button').forEach(
    item => item.style.pointerEvents = '');
  ulElement.current.querySelectorAll('.draggable').forEach(
    item => item.style.pointerEvents = '');

  element.style.width = '';
  element.style.position = '';
  element.style.pointerEvents = '';
  element.style.backgroundColor = '';
  shift(element, element.parentElement.lastElementChild, 0);
  setElement(null);

  if (stopInterval) {
    stopInterval(intervalId);
  }

  document.body.classList.remove(styles.unselectable);
};


export const scrollTo = (
  element,
  setIntervalId,
  ulElement,
  event
) => {
  if (element && event.pointerType !== 'touch') {
    setIntervalId(setInterval(() => {
      if (event.clientY > event.target.offsetParent.offsetTop) {
        ulElement.current.parentElement.scrollTop += 30;
      } else {
        ulElement.current.parentElement.scrollTop -= 30;
      }
    }, 200));
  };
};


export const stopInterval = id => {
  clearInterval(id);
};
