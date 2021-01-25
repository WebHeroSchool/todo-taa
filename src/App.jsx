import InputItem from './components/InputItem/InputItem';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';

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
  return (<div>
    { title }
    <InputItem/>
    <ItemList items={ items }/>
    <Footer count='3'/>
  </div>);
}

export default App;
