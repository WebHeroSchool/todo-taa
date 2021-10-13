import styles from './Filters.module.css';
// import classNames from 'classnames';

import {
  ReactComponent as AlphaSvg,
} from './images/alpha-desc.svg';
import {
  ReactComponent as DateSvg,
} from './images/date-desc.svg';
import {
  ReactComponent as ReverseSvg,
} from './images/reverse.svg';
import {
  ReactComponent as CancelSvg,
} from './images/cancel.svg';

const filters = [
  AlphaSvg,
  DateSvg,
  ReverseSvg,
];

const Filters = () => (
  <div className={ styles.wrapper }>
    {
      filters.map((ButtonImg, index) => (
        <button key={ index } className={ styles.sortButton } >
          <ButtonImg className={ styles.buttonImage } />
        </button>
      ))
    }
    <CancelSvg />
  </div>
);


export default Filters;
