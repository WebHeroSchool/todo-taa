import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const title = '// TO DO:';
const subTitle = 'Список важных дел';

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
  return (
    <Card className={ styles.card }>
      <CardHeader
        classes={ styles }
        title={ title }
        subheader={ subTitle }
      />
      <CardContent>
        <InputItem/>
        <ItemList items={ items }/>
        <Footer count='3'/>
      </CardContent>
    </Card>
  );
}

export default App;
