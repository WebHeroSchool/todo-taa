import styles from './DndList.module.css';

import {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  endOfGesture,
  scrollTo,
  stopInterval,
} from './handlersUtils';

import {
  onPointerMoveHandler,
  onPointerDownHandler,
  onPointerOverHandler,
  onTouchOverHandler,
  onPointerUpListener,
  onContextMenuHandler,
} from './handleEvents';

import TodoItemContainer from '../TodoItem/TodoItemContainer';


const DndList = ({
  list,
  isDisabled,
  ...props
}) => {
  const [
    element,
    setElement,
  ] = useState(null);

  const [
    timerId,
    setTimerId,
  ] = useState(null);

  const [
    intervalId,
    setIntervalId,
  ] = useState(null);

  const ulElement = useRef(null);


  useEffect(() => {
    const parentOfList = ulElement.current.parentElement;
    const scrollToWithArgs = scrollTo.bind(
      event, element, setIntervalId, ulElement);

    parentOfList.addEventListener(
      'pointerleave', scrollToWithArgs);

    return () => parentOfList.removeEventListener(
      'pointerleave', scrollToWithArgs);
  }, [
    element,
  ]);


  useEffect(() => {
    const parentOfList = ulElement.current.parentElement;
    const stopCurrentInterval = stopInterval.bind(null, intervalId);

    parentOfList.addEventListener(
      'pointerenter', stopCurrentInterval);

    return () => parentOfList.removeEventListener(
      'pointerenter', stopCurrentInterval);
  }, [
    intervalId,
  ]);


  return (
    <ul ref={ ulElement }
      className={ styles.list }
      onPointerDown={ event => {
        if (!isDisabled) {
          return onPointerDownHandler(
            event,
            ulElement,
            element,
            setElement,
            setTimerId,
          );
        };
      } }
      onPointerMove={ event => onPointerMoveHandler(event, element) }
      onTouchMove={ event => onTouchOverHandler(
        event,
        element,
        ulElement,
        timerId,
        props.setOrderItems,
      ) }
      onPointerOver={ event => onPointerOverHandler(
        event,
        ulElement,
        element,
        props.setOrderItems,
      ) }
      onPointerUp={ () => onPointerUpListener(
        element,
        endOfGesture,
        setElement,
        timerId,
        ulElement,
        props.setOrderItems,
      ) }
      onContextMenu={ onContextMenuHandler }
    >
      {
        list.map(
          item => (
            <TodoItemContainer
              key={ item.id.toString() }
              { ...item }
            />
          )
        )
      }
    </ul>
  );
};

export default DndList;
