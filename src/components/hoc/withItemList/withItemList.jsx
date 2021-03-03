import styles from './withItemList.module.css';


const withItemList = Component => props => (
  <ul className={ styles.list }>
    {props.items.map(
      item => (
        <li key={item.id.toString()}>
          <Component
            {...item}
            {...props}
          />
        </li>
      )
    )}
  </ul>
);


export default withItemList;
