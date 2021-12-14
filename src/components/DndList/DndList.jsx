import {
  useState,
  useEffect,
  useRef,
} from 'react';

import {
  endOfGesture,
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

  const ulElement = useRef(null);


  useEffect(() => {
    const onHtmlUpHandler = onPointerLeaveHandler.bind(
      event,
      ulElement,
      element,
      endOfGesture,
      setElement,
      setTriggeredElement,
    );


    document.documentElement.addEventListener('pointerup', onHtmlUpHandler);

    return () => {
      document.documentElement.removeEventListener('pointerup',
        onHtmlUpHandler);
    };
  }, [
    element,
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
