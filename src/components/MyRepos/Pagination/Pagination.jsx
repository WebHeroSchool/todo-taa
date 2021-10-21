import styles from './Pagination.module.css';
import {
  useState,
  useEffect,
} from 'react';
import createPagination from '../../../utils/createPagination';


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
        disabled={ activePage === 1 }
      />
      {
        createPagination(props.length, activePage).map((page, index) => (
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
        disabled={ activePage === props.length }
      />
    </div>
  );
};


export default Pagination;
