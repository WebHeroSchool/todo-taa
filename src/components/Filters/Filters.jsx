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
  useEffect,
} from 'react';


const initialFilters = [
  {
    'icon': AlphaSvg,
    'isActive': false,
    'type': 'alphabet',
  },
  {
    'icon': DateSvg,
    'isActive': false,
    'type': 'date',
  },
  {
    'icon': ReverseSvg,
    'type': 'reverse',
  },
  {
    'icon': CancelSvg,
    'type': 'cancel',
  },
];

const Filters = props => {
  const onClickHandler = (id, type) => {
    setFilters(
      filters.map(item => {
        if (item.icon === id && type !== 'cancel' && type !== 'reverse') {
          item.isActive = true;
        } else if (type !== 'reverse') {
          item.isActive = false;
        }

        return item;
      })
    );
    props.filterBy(type);
  };

  const [
    filters,
    setFilters,
  ] = useState(initialFilters);

  useEffect(() => filters.forEach(item => item.isActive = false),
    [
      props.itemList,
    ]);

  return (
    <div className={ styles.wrapper }>
      {
        filters.map((Button, index) => (
          <button
            key={ index }
            className={ styles.sortButton }
            onClick={ () => onClickHandler(Button.icon, Button.type) }
          >
            <Button.icon className={ classNames({
              [styles.buttonImage]: true,
              [styles.active]: Button.isActive,
            }) } />
          </button>
        ))
      }
    </div>
  );
};


export default Filters;
