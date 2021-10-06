import styles from './withScrollBar.module.css';
import classNames from 'classnames';

import {
  useState,
  useEffect,
  useRef,
} from 'react';


const withScrollBar = (Component, props, items = 0) => {
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState(0);

  const [
    isScroll,
    setIsScroll,
  ] = useState(false);


  const wrapperEl = useRef(null);
  const noScrollEl = useRef(null);
  const thumb = useRef(null);

  useEffect(
    () => {
      thumb.current.style.transform =
      `translateY(${scrollPosition === 20 ?
        scrollPosition - 1 : scrollPosition}rem)`;
    }, [
      scrollPosition,
    ]
  );

  useEffect(
    () => {
      setScrollPosition(0);
    }, [
      items.length,
    ]
  );

  const onSizeScrollMove = event => setScrollPosition(
    Math.floor(event.currentTarget.scrollTop /
    (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight) * 20)
  );

  useEffect(() => {
    setIsScroll(
      noScrollEl.current.scrollHeight > wrapperEl.current.clientHeight
    );
  }, [
    props,
  ]);


  return (
    <div ref={ wrapperEl } className={ classNames({
      [styles.contentWrapper]: true,
    }) }>
      <div
        ref={ noScrollEl }
        className={ styles.noScrollWrapper }
        onScroll={ onSizeScrollMove }
      >
        <Component { ...props } />
      </div>
      <div className={ classNames({
        [styles.scrollbar]: true,
        [styles.hideScrollbar]: !isScroll,
      }) }>
        <div ref={ thumb } className={ styles.thumb }></div>
      </div>
    </div>
  );
};


export default withScrollBar;
