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
} from 'react';


const initialSortList = [
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


const Sort = () => {
  const [
    sortList,
    setSortList,
  ] = useState(initialSortList);

  const onClickHandler = inputType => {
    const newSortList = sortList.map(item => {
      if (inputType === 'alphabet' || inputType === 'date') {
        if (item.type === inputType) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      } else if (item.type === 'reverse' && inputType === 'reverse') {
        item.isActive = !item.isActive;
      } else if (inputType === 'cancel') {
        item.isActive = false;
      }

      return item;
    });

    setSortList(newSortList);
  };

  return (
    <div className={ styles.wrapper }>
      {
        sortList.map((Button, index) => (
          <button
            key={ index }
            className={ styles.sortButton }
            onClick={ () => onClickHandler(Button.type) }
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
