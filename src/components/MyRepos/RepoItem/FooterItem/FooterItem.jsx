import styles from './FooterItem.module.css';
import classNames from 'classnames';

import {
  ReactComponent as EllipseImg,
} from './images/ellipse.svg';
import {
  ReactComponent as StarImg,
} from './images/star.svg';
import {
  ReactComponent as ForkImg,
} from './images/fork.svg';


const FooterItem = ({
  type,
  value,
}) => {
  const style = classNames(
    styles.footerItem,
    styles.margin,
    {
      [styles[`${value}-color`]]: type === 'language',
    },
  );

  return (
    <span className={ style }>
      {type === 'language' ? <span className={ styles.circulSvg }>
        <EllipseImg /></span> : false}
      {type === 'star' ? <StarImg /> : false}
      {type === 'fork' ? <ForkImg /> : false}
      <span>{ value }</span>
    </span>
  );
};

export default FooterItem;
