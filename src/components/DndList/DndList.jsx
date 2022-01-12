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
  onPointerLeaveHandler,
} from './handleEvents';

import TodoItemContainer from '../TodoItem/TodoItemContainer';


const DndList = ({
  list,
  isDisabled,
}) => {
  const [
    element,
    setElement,
  ] = useState(null);

  const [
    triggeredElement,
    setTriggeredElement,
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
    const onHtmlUpHandler = onPointerLeaveHandler.bind(
      event,
      ulElement,
      element,
      endOfGesture,
      setElement,
      setTriggeredElement,
      stopInterval,
      intervalId,
    );

    document.documentElement.addEventListener('pointerup',
      onHtmlUpHandler);

    return () => {
      document.documentElement.removeEventListener('pointerup',
        onHtmlUpHandler);
    };
  }, [
    element,
    intervalId,
  ]);


  useEffect(() => {
    const scrollToWithArgs = scrollTo.bind(
      event, element, setIntervalId, ulElement);

    ulElement.current.parentElement.addEventListener(
      'pointerleave', scrollToWithArgs);

    return () => ulElement.current.parentElement.removeEventListener(
      'pointerleave', scrollToWithArgs);
  }, [
    element,
  ]);


  useEffect(() => {
    const stopCurrentInterval = stopInterval.bind(null, intervalId);

    ulElement.current.parentElement.addEventListener(
      'pointerenter', stopCurrentInterval);

    return () => ulElement.current.parentElement.removeEventListener(
      'pointerenter', stopCurrentInterval);
  }, [
    intervalId,
  ]);


  return (
    <ul ref={ ulElement }
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
        triggeredElement,
        setTriggeredElement,
        timerId,
      ) }
      onPointerOver={ event => onPointerOverHandler(
        event,
        ulElement,
        element,
        setTriggeredElement,
      ) }
      onPointerUp={ () => onPointerUpListener(
        element,
        triggeredElement,
        endOfGesture,
        setElement,
        setTriggeredElement,
        timerId,
        ulElement,
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
