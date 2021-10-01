import styles from './Pagination.module.css';

const getPagesNum = length => {
  const result = new Array(Number(length));
  for (let index = 0; index < result.length; index++) {
    result[index] = index + 1;
  };
  return result;
};

const Pagination = ({
  length,
}) => (
  <div className={ styles.pagination }>
    <input type="button" value="<" />
    {
      getPagesNum(length).map(item => (
        <input key={item} type="button" value={item} />
      ))
    }
    <input type="button" value=">" />
  </div>
);


export default Pagination;
