import styles from './withScrollBar.module.css';
import classNames from 'classnames';

import {
  useState,
  useEffect,
  useRef,
} from 'react';


const withScrollBar = (Component, props) => {
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

  useEffect(
    () => {
      if (window.thumb) {
        window.thumb.style.transform =
        `translateY(${scrollPosition === 20 ?
          scrollPosition - 1 : scrollPosition}rem)`;
      }
    }, [
      scrollPosition,
    ]
  );

  const onSizeScrollMove = event => setScrollPosition(
    Math.floor(event.currentTarget.scrollTop * 100 /
    (event.currentTarget.scrollHeight - event.currentTarget.offsetHeight)) / 5
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(wrapperEl.current.clientWidth);
      console.log(noScrollEl.current.clientWidth);
      setIsScroll(
        wrapperEl.current.clientWidth === noScrollEl.current.clientWidth
      );
    }, 0);
  }, [
    props,
  ]);


  return (
    <div ref={ wrapperEl } className={ styles.contentWrapper }>
      <div ref={ noScrollEl } className={ styles.noScrollWrapper }
        onScroll={ onSizeScrollMove }
        onTouchEnd={ onSizeScrollMove }
      >
        <Component { ...props } />
      </div>
      <div className={ classNames({
        [styles.scrollbar]: true,
        [styles.hideScrollbar]: !isScroll,
      }) }>
        <div id="thumb" className={ styles.thumb }></div>
      </div>
    </div>
  );
};


export default withScrollBar;
