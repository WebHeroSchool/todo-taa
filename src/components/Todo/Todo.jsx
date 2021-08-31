import withIndent from '../hoc/withIndent/withIndent';

import Title from '../Title/Title';
import InputItemContainer from '../InputItem/InputItemContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import FooterContainer from '../Footer/FooterContainer';
import {
  Divider,
} from '@material-ui/core';


const FooterWithIdent = () => withIndent(FooterContainer);

const Todo = () => (
  <>
    <Title titleValue={ 'TO DO:' } />
    <InputItemContainer />
    <ItemListContainer />
    <Divider />
    <FooterWithIdent />
  </>
);


export default Todo;
