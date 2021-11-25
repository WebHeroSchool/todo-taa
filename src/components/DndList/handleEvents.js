export const onPointerMoveHandler = (event, element) => {
  if (element) {
    const shift = event.clientY - element.offsetTop -
      (element.scrollHeight * .5);
    element.style.transform = `translateY(${shift}px)`;
  }
};


export const onPointerDownHandler = (eventTarget,
  style, modifyer, element, newElement) => {
  if (eventTarget.className === style) {
    eventTarget.parentElement.style.height = `${
      eventTarget.parentElement.offsetHeight}px`;
    eventTarget.style.pointerEvents = 'none';
    eventTarget.style.width = `${eventTarget.offsetWidth}px`;
    if (eventTarget.nextElementSibling) {
      modifyer(element,
        eventTarget.nextElementSibling, eventTarget.offsetHeight);
    }
    eventTarget.style.position = 'fixed';
    newElement(eventTarget);
  }
};


export const onPointerOverHandler = (event,
  style, element, setTriggeredElement, shift, setTransition, getHeight) => {
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
  triggeredElement, setTriggeredElement, shift, getHeight) => {
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


export const onPointerUpListener = (element, triggeredElement,
  isSlideToDown, searchIndex, endOfGesture,
  setElement, setTriggeredElement) => {
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


export const onContextMenuHandler = event => {
  if (event.nativeEvent.pointerType === 'touch') {
    event.preventDefault();
  };
};
