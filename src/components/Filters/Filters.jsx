import styles from './Filters.module.css';
import classNames from 'classnames';

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

import {
  useState,
} from 'react';


const initialFilters = [
  {
    'icon': AlphaSvg,
    'isActive': false,
  },
  {
    'icon': DateSvg,
    'isActive': false,
  },
  {
    'icon': ReverseSvg,
    'isActive': false,
  },
];

const Filters = () => {
  const onClickHandler = id => setFilters(
    filters.map(item => {
      if (item.icon === id) {
        item.isActive = true;
      } else {
        item.isActive = false;
      }

      return item;
    })
  );

  const [
    filters,
    setFilters,
  ] = useState(initialFilters);

  return (
    <div className={ styles.wrapper }>
      {
        filters.map((Button, index) => (
          <button
            key={ index }
            className={ styles.sortButton }
            onClick={ () => onClickHandler(Button.icon) }
          >
            <Button.icon className={ classNames({
              [styles.buttonImage]: true,
              [styles.active]: Button.isActive,
            }) } />
          </button>
        ))
      }
      <CancelSvg />
    </div>
  );
};


export default Filters;
