import {
  searchIndex,
  isSlideToDown,
  shift,
  setTransition,
  getHeight,
} from './handlersUtils';


export const onPointerMoveHandler = (event, element) => {
  if (element) {
    const shift = event.clientY - element.offsetTop -
      (element.scrollHeight * .5);
    element.style.transform = `translateY(${shift}px)`;
  }
};


export const onPointerDownHandler = (eventTarget,
  style, element, setElement) => {
  console.log(style);
  console.log(eventTarget);
  if (eventTarget.className === style) {
    eventTarget.parentElement.style.height = `${
      eventTarget.parentElement.offsetHeight}px`;
    eventTarget.style.pointerEvents = 'none';
    eventTarget.style.width = `${eventTarget.offsetWidth}px`;
    if (eventTarget.nextElementSibling) {
      shift(element,
        eventTarget.nextElementSibling, eventTarget.offsetHeight);
    }
    eventTarget.style.position = 'fixed';
    setElement(eventTarget);
  }
};


export const onPointerOverHandler = (event,
  style, element, setTriggeredElement) => {
  if (document.elementFromPoint(
    event.clientX, event.clientY).className === style) {
    const height = getHeight(event.target);

    if (element) {
      setTriggeredElement(event.target);
      shift(element, event.target, height);
      setTransition(event.target.parentElement.firstElementChild, .1);
    }
  }
};


export const onTouchOverHandler = (event, element, style,
  triggeredElement, setTriggeredElement) => {
  const elementUnderPointer = document.elementFromPoint(
    event.touches[0].pageX,
    event.touches[0].pageY);

  if (element && elementUnderPointer
      && elementUnderPointer.className === style) {
    if (event.currentTarget.lastElementChild === triggeredElement) {
      setTriggeredElement(null);
    } else {
      setTriggeredElement(elementUnderPointer);
    }
    shift(element, elementUnderPointer, getHeight(elementUnderPointer));
  }
};


export const onPointerUpListener = (element,
  triggeredElement, endOfGesture, setElement, setTriggeredElement) => {
  if (element && triggeredElement) {
    let where;
    const isDown = isSlideToDown(searchIndex(element),
      searchIndex(triggeredElement));

    if ((isDown && triggeredElement.style.transform.length < 16)
      || (!isDown && triggeredElement.style.transform.length < 16)) {
      where = 'afterEnd';
    } else {
      where = 'beforeBegin';
    }

    triggeredElement.insertAdjacentElement(where, element);
  }

  if (element) {
    return endOfGesture(element, setElement, setTriggeredElement);
  }
};


export const onPointerLeaveHandler = (
  ulElement,
  element,
  endOfGesture,
  setElement,
  setTriggeredElement,
) => {
  if (ulElement.current !== event.target && element) {
    return endOfGesture(element, setElement, setTriggeredElement);
  }
};


export const onContextMenuHandler = event => {
  if (event.nativeEvent.pointerType === 'touch') {
    event.preventDefault();
  };
};
