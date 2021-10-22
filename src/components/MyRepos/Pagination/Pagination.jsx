import styles from './Pagination.module.css';
import {
  useState,
  useEffect,
} from 'react';
import createPagination from '../../../utils/createPagination';
import {
  Button,
} from '@material-ui/core';


const Pagination = props => {
  const [
    activePage,
    setActivePage,
  ] = useState(1);

  useEffect(() => props.setPage(activePage), [
    activePage,
  ]);

  const style = {
    minWidth: 40,
  };

  return (
    <div className={ styles.pagination } >
      <Button
        key="<"
        onClick={ () => {
          if (activePage > 1) {
            setActivePage(activePage - 1);
          }
        } }
        disabled={ activePage === 1 }
        variant="outlined"
        style={ style }
      >
        &lt;
      </Button>
      {
        createPagination(props.length, activePage).map((page, index) => (
          <Button
            key={ index }
            type="button"
            onClick={ () => {
              if (page !== '...') {
                setActivePage(page);
              } else {
                setActivePage(index);
              }
            } }
            className={ activePage === page ? styles.active : '' }
            variant="outlined"
            style={ style }
          >
            { page }
          </Button>)
        )
      }
      <Button
        key=">"
        onClick={ () => {
          if (activePage < props.length) {
            setActivePage(activePage + 1);
          }
        } }
        disabled={ activePage === props.length }
        variant="outlined"
        style={ style }
      >
        &gt;
      </Button>
    </div>
  );
};


export default Pagination;
