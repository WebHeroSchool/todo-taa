import styles from './Pagination.module.css';
import classNames from 'classnames';
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


  return (
    <div className={ styles.pagination } >
      <Button
        key="<"
        onClick={ () => {
          if (activePage > 1) {
            setActivePage(activePage - 1);
          }
          props.setIsSubLoading(true);
        } }
        disabled={ activePage === 1 }
        variant="outlined"
        className={ styles.button }
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
              props.setIsSubLoading(true);
            } }
            className={ classNames({
              [styles.button]: true,
              [styles.active]: activePage === page,
            }) }
            variant="outlined"
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
          props.setIsSubLoading(true);
        } }
        disabled={ activePage === props.length }
        variant="outlined"
        className={ styles.button }
      >
        &gt;
      </Button>
    </div>
  );
};


export default Pagination;
