import styles from './Filters.module.css';

import {
  ReactComponent as ReverseSvg,
} from './images/reverse.svg';
import {
  ReactComponent as AlphaSvg,
} from './images/alpha-desc.svg';
import {
  ReactComponent as DateSvg,
} from './images/date-desc.svg';
import {
  ReactComponent as CancelSvg,
} from './images/cancel.svg';

const Filters = () => (
  <div className={ styles.wrapper }>
    <button className={ styles.sortButton } >
      <AlphaSvg className={ styles.buttonImage } />
    </button>
    <button className={ styles.sortButton } >
      <DateSvg className={ styles.buttonImage } />
    </button>
    <button className={ styles.sortButton } >
      <ReverseSvg className={ styles.buttonImage } />
    </button>
    <CancelSvg />
  </div>
);


export default Filters;
