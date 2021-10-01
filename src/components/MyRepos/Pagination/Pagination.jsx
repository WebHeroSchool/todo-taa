import styles from './Pagination.module.css';
import {
  useState,
} from 'react';

const pages = [
  1,
  2,
  3,
  4,
  5,
];

// const getPages = (current, length) => {
//   console.log(current);
//   const result = new Array(+length);

//   result[0] = 1;
//   result[length - 1] = length;
//   for (let index = 2; index < 5; index++) {
//     console.log(length - index);
//     if ((length - current) < 7) {
//       result[index] = '...';
//     } else {
//       result[index] = index;
//     }
//   }


//   return result;
// };

const Pagination = () => {
  const [
    activePage,
    setActivePage,
  ] = useState(1);

  return (
    <div className={ styles.pagination } >
      <input
        type="button"
        value="<"
        onClick={ () => setActivePage(activePage - 1) }
      />
      {
        pages.map((page, index) => (
          <input
            key={ index }
            type="button"
            value={ page }
            onClick={ () => setActivePage(page) }
            className={ activePage === page ? styles.active : '' }
          />)
        )
      }
      <input
        type="button"
        value=">"
        onClick={ () => setActivePage(activePage + 1) }
      />
    </div>
  );
};


export default Pagination;
