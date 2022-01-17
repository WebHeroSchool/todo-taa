import styles from '../TodoItem/TodoItem.module.css';


export const setElementPosition = (element, pageY) => {
  const delta = pageY - element.offsetTop - (element.offsetHeight * .5)
    - document.scrollingElement.scrollTop;

  return element.style.transform = `translateY(${delta}px)`;
};


export const shift = (pointer, thisElement, height, lastModify = false,
  setIsShiftAllowed) => {
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

  if (setIsShiftAllowed) {
    setIsShiftAllowed(false);
  }
};


export const setTransition = (element, time = 0) => {
  element.style.transition = `transform ${time}s ease-out`;

  const next = element.nextElementSibling;
  if (next) {
    setTransition(next, time);
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


export const endOfGesture = (element, setElement,
  setTriggeredElement, ulElement, stopInterval, intervalId,
  triggeredElement, setOrderItems) => {
  ulElement.current.style.cursor = 'auto';
  ulElement.current.querySelectorAll('button').forEach(
    item => item.style.pointerEvents = '');
  ulElement.current.querySelectorAll('.draggable').forEach(
    item => item.style.pointerEvents = '');

  element.style.width = '';
  element.style.position = '';
  element.style.pointerEvents = '';
  element.style.backgroundColor = '';
  shift(element, element.parentElement.lastElementChild, 0, true);
  setTransition(element.parentElement.firstElementChild, 0);
  setElement(null);
  setTriggeredElement(null);

  if (stopInterval) {
    stopInterval(intervalId);
  }

  document.body.classList.remove(styles.unselectable);

  if (triggeredElement) {
    setOrderItems(element.dataset.order, triggeredElement.dataset.order);
  };
};


export const scrollTo = (element, setIntervalId, ulElement, event) => {
  if (element) {
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


export const orderOfDroppedItem = (triggeredElement, eventTarget,
  element, setTriggeredElement) => {
  if (triggeredElement === eventTarget
    && element.dataset.order > eventTarget.dataset.order) {
    setTriggeredElement(eventTarget.previousElementSibling);
  } else if (triggeredElement === eventTarget
    && element.dataset.order < eventTarget.dataset.order) {
    setTriggeredElement(eventTarget.nextElementSibling);
  } else {
    setTriggeredElement(eventTarget);
  }
};
