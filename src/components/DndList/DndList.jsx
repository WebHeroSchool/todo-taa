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
  ...props
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
        triggeredElement,
      ) }
      onPointerUp={ () => onPointerUpListener(
        element,
        triggeredElement,
        endOfGesture,
        setElement,
        setTriggeredElement,
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
