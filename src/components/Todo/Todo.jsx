import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';
import InputItemContainer from '../InputItem/InputItemContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import FooterContainer from '../Footer/FooterContainer';
import {
  Divider,
} from '@material-ui/core';


const Todo = () => (
  withMyPaperLayer(
    [
      () => withIndent([
        () => <Title titleValue={ 'TO DO:' } />,
        InputItemContainer,
        ItemListContainer,
      ]),
      Divider,
      () => withIndent([
        FooterContainer,
      ]),
    ]
  )
);


export default Todo;
