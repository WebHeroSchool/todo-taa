import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const title = (<h1>// TO DO:</h1>);

const items = [
  {
    value: 'Разобраться с пропсами',
    isDone: false,
  },
  {
    value: 'Сделать комит',
    isDone: true,
  },
  {
    value: 'Сдать задание на проверку',
    isDone: false,
  },
];

const App = () => {
  return (<div className={ styles.wrapper }>
    { title }
    <InputItem/>
    <ItemList items={ items }/>
    <Footer count='3'/>
  </div>);
}

export default App;
