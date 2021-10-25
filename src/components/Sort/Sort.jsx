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


const Sort = props => {
  const [
    sortList,
    setSortList,
  ] = useState(initialSortList);

  useEffect(() => {
    const newSortList = sortList.map(item => {
      item.isActive = false;
      return item;
    });
    setSortList(newSortList);
    props.setSort(false);
  }, [
    props.itemList.length,
  ]);

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
    if (inputType === 'cancel') {
      props.setSort(false);
    } else {
      props.setSort(true);
    }
    props.sortBy(inputType);
  };

  return (
    <div className={ styles.wrapper }>
      {
        props.isSort ?
          <span className={ classNames(
            styles.infoMessage,
            styles.manualDenied,
            styles.infoMargin,
          ) }>
            перетаскивание списка запрещено
          </span> : <span className={ styles.infoMargin }>Сортировать по:</span>
      }
      <span className={ styles.buttonsWrapper }>
        {
          sortList.map((Button, index) => (
            <button
              key={ index }
              className={ classNames({
                [styles.sortButton]: true,
                [styles.disabled]: !props.isSort && Button.type === 'cancel',
              }) }
              onClick={ () => onClickHandler(Button.type) }
              disabled={ !props.isSort && Button.type === 'cancel' }
            >
              <Button.icon className={ classNames({
                [styles.buttonImage]: true,
                [styles.active]: Button.isActive,
              }) } />
            </button>
          ))
        }
      </span>
    </div>
  );
};


export default Sort;
