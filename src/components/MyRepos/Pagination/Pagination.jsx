import styles from './Pagination.module.css';

const inputs = length => {
  const result = new Array(Math.ceil(length / 8));
  for (let index = 0; index < result.length; index++) {
    result[index] = index + 1;
  };
  console.log(result);
  return result;
};
// { Math.ceil(length / 8) }

const Pagination = ({
  length,
}) => (
  <div className={ styles.pagination }>
    {length}
    <input type="button" value="<" />
    {
      inputs(length).map(item => (
        <input type="button" value={item} />
      ))
    }
    <input type="button" value=">" />
  </div>
);


export default Pagination;
