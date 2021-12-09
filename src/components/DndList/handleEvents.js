import {
  searchIndex,
  isSlideToDown,
  shift,
  setTransition,
  getHeight,
  setElementPosition,
} from './handlersUtils';


export const onPointerMoveHandler = (event, element) => {
  if (element) {
    const shift = event.clientY - element.offsetTop -
      (element.scrollHeight * .5);
    element.style.transform = `translateY(${shift}px)`;
  }
};


export const onPointerDownHandler = (eventTarget,
  ulElement, element, setElement) => {
  if (!event.target.closest('span')) {
    if (ulElement.current.contains(eventTarget)) {
      eventTarget.parentElement.style.height = `${
        eventTarget.parentElement.offsetHeight}px`;
      eventTarget.style.pointerEvents = 'none';
      eventTarget.style.width = `${eventTarget.offsetWidth}px`;

      if (eventTarget.nextElementSibling) {
        shift(element,
          eventTarget.nextElementSibling, eventTarget.offsetHeight);
      }

      eventTarget.style.position = 'fixed';
      setElementPosition(eventTarget, event.offsetY);
      setElement(eventTarget);
    }
  }
};


export const onPointerOverHandler = (event,
  ulElement, element, setTriggeredElement) => {
  const eventTarget = document.elementFromPoint(
    event.clientX, event.clientY).closest('li');

  if (ulElement.current.contains(eventTarget)) {
    const height = getHeight(eventTarget);

    if (element) {
      setTriggeredElement(eventTarget);
      shift(element, eventTarget, height);
      setTransition(eventTarget.parentElement.firstElementChild, .1);
    }
  }
};


export const onTouchOverHandler = (event, element, ulElement,
  triggeredElement, setTriggeredElement) => {
  const elementUnderPointer = document.elementFromPoint(
    event.touches[0].pageX,
    event.touches[0].pageY).closest('li');

  if (element && elementUnderPointer
      && ulElement.current.contains(elementUnderPointer)) {
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
