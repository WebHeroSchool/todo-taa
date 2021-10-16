import styles from './Sort.module.css';
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


const initialSort = [
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

const Sort = props => {
  const onClickHandler = (id, type) => {
    setSort(
      sort.map(item => {
        if (item.icon === id && type !== 'cancel' && type !== 'reverse') {
          item.isActive = true;
        } else if (type !== 'reverse') {
          item.isActive = false;
        }

        return item;
      })
    );
    props.sortBy(type);
  };

  const [
    sort,
    setSort,
  ] = useState(initialSort);

  useEffect(() => sort.forEach(item => item.isActive = false),
    [
      props.itemList,
    ]);

  return (
    <div className={ styles.wrapper }>
      {
        sort.map((Button, index) => (
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


export default Sort;
