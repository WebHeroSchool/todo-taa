import InputItem from './components/InputItem/InputItem';
import ItemList from './components/ItemList/ItemList';
import Footer from './components/Footer/Footer';

const title = (<h1>Очень важные дела:</h1>);

const App = () => {
  return (<div>
    { title }
    <InputItem/>
    <ItemList/>
    <Footer/>
  </div>);
}

export default App;
