import styles from './Pagination.module.css';
import {
  useState,
  useEffect,
} from 'react';

const pages = (length, current) => {
  const result = [];

  if (current >= 3) {
    result[0] = 1;
  }

  if (current - result[0] >= 3) {
    result[current - 2] = '...';
  }

  if (current > 1) {
    result[current - 1] = current - 1;
  }

  result[current] = current;

  if (current < length) {
    result[current + 1] = current + 1;
  }

  if (length - current >= 4) {
    result[current + 2] = '...';
  } else {
    if (current < length - 1) {
      result[current + 2] = current + 2;
    }
  }

  result[length] = length;

  return result;
};


const Pagination = props => {
  const [
    activePage,
    setActivePage,
  ] = useState(1);

  useEffect(() => props.setPage(activePage), [
    activePage,
  ]);

  return (
    <div className={ styles.pagination } >
      <input
        type="button"
        key="<"
        value="<"
        onClick={ () => {
          if (activePage > 1) {
            setActivePage(activePage - 1);
          }
        } }
      />
      {
        pages(props.length, activePage).map((page, index) => (
          <input
            key={ index }
            type="button"
            value={ page }
            onClick={ () => {
              if (page !== '...') {
                setActivePage(page);
              } else {
                setActivePage(index);
              }
            } }
            className={ activePage === page ? styles.active : '' }
          />)
        )
      }
      <input
        type="button"
        key=">"
        value=">"
        onClick={ () => {
          if (activePage < props.length) {
            setActivePage(activePage + 1);
          }
        } }
      />
    </div>
  );
};


export default Pagination;
