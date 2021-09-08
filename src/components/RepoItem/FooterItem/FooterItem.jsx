import styles from './FooterItem.module.css';
import classNames from 'classnames';

import {
  ReactSVG,
} from 'react-svg';

import ellipseImg from './images/ellipse.svg';
import starImg from './images/star.svg';


const state = {
  src: {
    language: ellipseImg,
    star: starImg,
  },
};

const FooterItem = ({
  type,
  value,
}) => (
  <>
    <ReactSVG
      className={ classNames(
        styles.margin,
        styles[`${value}-color`],
      ) }
      src={ state.src[type] }
      wrapper="span"
    />
    <span className={ styles.language }>{ value }</span>
  </>
);


export default FooterItem;
