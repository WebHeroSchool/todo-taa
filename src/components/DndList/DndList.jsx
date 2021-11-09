import {
  useState,
  useEffect,
} from 'react';
import styles from './DndList.module.css';

import {
  onTouchStartHandler,
  onTouchMoveHandler,
  onTouchStopHandler,
  onContextMenuHandler,
} from './touchEvents';

const list = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
];


const DndList = () => {
  const [
    selectedEl,
    setSelectedEl,
  ] = useState(null);
  const [
    timerId,
    setTimerId,
  ] = useState(null);

  const [
    coordY,
    setCoordY,
  ] = useState(null);

  const [
    changedEl,
    setChangedEl,
  ] = useState(null);


  useEffect(() => {
    document.addEventListener('pointermove', onPointerMoveHandler);
  }, []);

  useEffect(() => {
    document.addEventListener('pointerup',
      () => onPointerUpHandler(selectedEl, changedEl, styles.noPointer));
  }, [
    selectedEl,
  ]);

  useEffect(() => {
    if (selectedEl && selectedEl.classList[styles.noPointer]) {
      console.log('olo');
      return selectedEl.classList.remove(styles.noPointer);
    } else if (selectedEl) {
      return selectedEl.classList.add(styles.noPointer);
    }
  }, [
    selectedEl,
    changedEl,
  ]);

  useEffect(() => {
    if (selectedEl) {
      selectedEl.style.transform = `translateY(${coordY -
        selectedEl.offsetTop - (selectedEl.offsetHeight * .5)}px)`;
    }
  }, [
    coordY,
  ]);


  // const setTranslateNextEl = element => {
  //   const nextEl = element.nextElementSibling;
  //   if (nextEl) {
  //     nextEl.style.transform = `translateY(${element.offsetHeight}px)`;
  //     setTranslateNextEl(nextEl);
  //   }
  // };


  // const onDragStartHandler = event => {
  //   setSelectedEl(event.target);
  //   setTranslateNextEl(event.target);
  // };

  // const onDragOverHandler = event => {
  // console.log(event);
  // selectedEl.style.transform = `translateY(${event.pageY}px)`;
  // };

  // const onDragEnterHandler = event => {
  // selectedEl.remove();
  // event.target.style.transform = 'unset';
  // event.target.style.transform = `translateY(${
  //   event.target.offsetHeight
  // }px)`;
  // event.target.insertAdjacentElement('afterend', selectedEl);
  // };


  const onPointerDownHandler = event => {
    if (event.pointerType !== 'touch') {
      setSelectedEl(event.target);
    }


    // event.target.style.position = 'absolute';
    // event.target.style.transform = `scaleX(1.1)`;
  };


  const onPointerMoveHandler = event => {
    setCoordY(event.pageY);


    // console.log('test s');
    // console.log(selectedEl);
    // if (selectedEl) {
    //   selectedEl.style.transform = `translateY(${event.pageY -
    //     selectedEl.offsetTop - (selectedEl.offsetHeight * .5)}px)`;
    // }
  };

  const onPointerUpHandler = (selectedEl, changedEl, className) => {
    console.log();
    console.log(changedEl);
    if (selectedEl) {
      selectedEl.classList.remove(className);
      if (changedEl) {
        changedEl.insertAdjacentElement('afterend', selectedEl);
        selectedEl.style.transform = 'unset';
      }
    }
    setSelectedEl(null);
  };

  const onPointerEnterHandler = event => {
    console.log('test');
    if (event.target !== selectedEl) {
      setChangedEl(event.target);
    } else if (selectedEl) {
      event.target.style.transform = `translateY(-${
        selectedEl.offsetHeight}px)`;
    }
  };


  return (
    <ul
      className={ styles.wrapper }
    >
      {
        list.map(
          element => (
            <li
              className={ styles.listItem }
              key={ element }
              onPointerDown={ onPointerDownHandler }
              onPointerEnter={ onPointerEnterHandler }
              onTouchStart={
                event => onTouchStartHandler(event, setTimerId, setSelectedEl) }
              onTouchMove={
                event => onTouchMoveHandler(event, selectedEl, timerId) }
              onTouchEnd={
                event => onTouchStopHandler(event, setSelectedEl, timerId) }
              onContextMenu={ onContextMenuHandler }
            >
              { element }
            </li>
          )
        )
      }
    </ul>
  );
};

export default DndList;
