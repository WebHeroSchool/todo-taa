const onSingleDoubleClick = (onSingleClickHandler, onDoubleClickHandler) => {
  let time;
  let timerId;
  const delay = 200;

  return function () {
    if (!time) {
      time = Date.now();
      timerId = setTimeout(() => {
        onSingleClickHandler();
        time = null;
      }, delay);
    } else if (time) {
      if ((Date.now() - time) < delay) {
        clearTimeout(timerId);
        onDoubleClickHandler();
      };
      time = null;
    }
  };
};

export default onSingleDoubleClick;
