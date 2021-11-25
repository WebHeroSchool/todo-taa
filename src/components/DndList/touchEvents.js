export const onPointerMoveHandler = (event, element) => {
  if (element) {
    const shift = event.clientY - element.offsetTop -
      (element.scrollHeight * .5);
    element.style.transform = `translateY(${shift}px)`;
  }
};


export const onContextMenuHandler = event => {
  if (event.nativeEvent.pointerType === 'touch') {
    event.preventDefault();
  };
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
