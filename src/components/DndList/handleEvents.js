import {
  shift,
  setTransition,
  getHeight,
  setElementPosition,
  // orderOfDroppedItem,
} from './handlersUtils';

export const onPointerMoveHandler = (event, element) => {
  if (element) {
    const shift = event.pageY - element.offsetTop -
      (element.scrollHeight * .5) - document.scrollingElement.scrollTop;

    element.style.transform = `translateY(${shift}px)`;
  }
};


export const onPointerDownHandler = (event,
  ulElement, element, setElement, setTimerId) => {
  const eventTarget = event.target.closest('li');

  if (event.pointerType === 'mouse'
    && event.target.closest('.draggable')) {
    ulElement.current.querySelectorAll(
      'button').forEach(item => item.style.pointerEvents = 'none');
    ulElement.current.querySelectorAll(
      '.draggable').forEach(item => {
      if (!event.target.closest('div').contains(item)) {
        item.style.pointerEvents = 'none';
      }
    });
  };

  const doHandler = () => {
    if (event.target.closest('.draggable')) {
      if (ulElement.current.contains(eventTarget)) {
        ulElement.current.style.cursor = 'move';
        eventTarget.parentElement.style.height = `${
          eventTarget.parentElement.offsetHeight}px`;
        eventTarget.style.pointerEvents = 'none';
        eventTarget.style.width = `${eventTarget.offsetWidth}px`;

        if (eventTarget.nextElementSibling) {
          shift(element,
            eventTarget.nextElementSibling, eventTarget.offsetHeight);
        }
        eventTarget.style.position = 'fixed';
        setElementPosition(eventTarget, event.nativeEvent.pageY);
        setElement(eventTarget);
      }
    }
  };


  if (event.pointerType === 'touch'
    && event.target.parentElement.classList[0] === 'draggable'
    && !event.target.parentElement.previousElementSibling
      .previousElementSibling.isContentEditable) {
    const timer = setTimeout(() => {
      eventTarget.style.backgroundColor = 'var(--dragging-element)';
      doHandler();
    }, 200);
    setTimerId(timer);
  } else if (event.pointerType !== 'touch') {
    doHandler();
  };
};


export const onPointerOverHandler = (event,
  ulElement, element,
  // setTriggeredElement,
  triggeredElement,
  setOrderItems
) => {
  if (element) {
    const eventTarget = document.elementFromPoint(
      event.clientX, event.clientY).closest('li');

    if (ulElement.current.contains(eventTarget)) {
      const height = getHeight(eventTarget, element);

      // orderOfDroppedItem(triggeredElement, eventTarget,
      //   element, setTriggeredElement);


      shift(element, eventTarget, height);
      setTransition(eventTarget.parentElement.firstElementChild, 0);
    }

    if (element && eventTarget) {
      setOrderItems(element.dataset.order, eventTarget.dataset.order);
    }
  }
};


export const onTouchOverHandler = (event, element, ulElement,
  triggeredElement, setTriggeredElement, timerId,
  setIsShiftAllowed, isShiftAllowed, setOrderItems) => {
  if (event.type === 'touchmove') {
    clearTimeout(timerId);
  }

  const elFromPointer = document.elementFromPoint(
    event.touches[0].pageX,
    event.touches[0].pageY);

  const closestLi = () => {
    if (elFromPointer) {
      return elFromPointer.closest('li');
    }
  };

  const elementUnderPointer = closestLi();

  if (!elementUnderPointer) {
    setIsShiftAllowed(true);
  }

  if (element && isShiftAllowed
      && ulElement.current.contains(elementUnderPointer)) {
    // orderOfDroppedItem(triggeredElement, elementUnderPointer,
    //   element, setTriggeredElement);


    shift(element, elementUnderPointer,
      getHeight(elementUnderPointer, element), null, setIsShiftAllowed);
    setOrderItems(element.dataset.order, elementUnderPointer.dataset.order);
  }
};


export const onPointerUpListener = (element, triggeredElement,
  endOfGesture, setElement, setTriggeredElement,
  timerId, ulElement, setOrderItems) => {
  if (event.pointerType === 'touch') {
    clearTimeout(timerId);
  }

  if (element) {
    return endOfGesture(element, setElement, setTriggeredElement, ulElement,
      null, null, triggeredElement, setOrderItems);
  }
};


export const onPointerLeaveHandler = (
  ulElement,
  element,
  endOfGesture,
  setElement,
  setTriggeredElement,
  stopInterval,
  intervalId,
) => {
  if (ulElement.current !== event.target && element) {
    return endOfGesture(element, setElement, setTriggeredElement,
      ulElement, stopInterval, intervalId);
  }
};


export const onContextMenuHandler = event => {
  if (event.nativeEvent.pointerType === 'touch') {
    event.preventDefault();
  };
};
