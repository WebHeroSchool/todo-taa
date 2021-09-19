import styles from './withScrollBar.module.css';
import classNames from 'classnames';

import {
  useState,
  useEffect,
} from 'react';


const withScrollBar = (Component, props) => {
  const [
    scrollPosition,
    setScrollPosition,
  ] = useState(0);

  const [
    componentScroll,
    setComponentScroll,
  ] = useState(0);

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
    setComponentScroll(
      document.getElementById('noScroll').firstElementChild.scrollHeight
    );
    console.log(componentScroll);
  });


  return (
    <div className={ styles.contentWrapper }>
      <div id="noScroll" className={ styles.noScrollWrapper }
        onScroll={ onSizeScrollMove }
        onTouchEnd={ onSizeScrollMove }
      >
        <Component {...props}/>
      </div>
      <div className={ classNames({
        [styles.scrollbar]: true,
        [styles.hideScrollbar]: componentScroll < 390,
      }) }>
        <div id="thumb" className={ styles.thumb }></div>
      </div>
    </div>
  );
};


export default withScrollBar;
