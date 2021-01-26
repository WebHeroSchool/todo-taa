import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const title = (<h1>Очень важные дела:</h1>);

const items = [
  {
    value: 'Разобраться с пропсами',
  },
  {
    value: 'Сделать комит',
  },
  {
    value: 'Сдать задание на проверку',
  },
];

const App = () => {
  return (<div className='wrapper'>
    { title }
    <InputItem/>
    <ItemList items={ items }/>
    <Footer count='3'/>
  </div>);
}

export default App;
