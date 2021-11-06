export const onTouchStartHandler = (event, setTimerId, setSelectedEl) => {
  setTimerId(
    setTimeout(() => {
      setSelectedEl(event.target);
      event.target.style.transform = `scaleX(1.1)`;
    }, 400)
  );
};

export const onTouchMoveHandler = (event, selectedEl, timerId) => {
  if (selectedEl) {
    selectedEl.style.transform = `scaleX(1.1) translateY(${
      event.changedTouches[0].clientY - selectedEl.offsetTop -
      (selectedEl.offsetHeight * .5)}px)`;
  } else {
    clearTimeout(timerId);
  };
};

export const onTouchStopHandler = (event, setSelectedEl, timerId) => {
  event.target.style.transform = 'unset';
  setSelectedEl(null);
  clearTimeout(timerId);
};

export const onContextMenuHandler = event => {
  if (event.nativeEvent.pointerType === 'touch') {
    event.preventDefault();
  };
};
