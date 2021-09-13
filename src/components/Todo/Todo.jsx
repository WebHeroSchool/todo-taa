import withIndent from '../hoc/withIndent/withIndent';
import withMargin from '../hoc/withMargin/withMargin';

import Title from '../Title/Title';
import InputItemContainer from '../InputItem/InputItemContainer';
import ItemListContainer from '../ItemList/ItemListContainer';
import FooterContainer from '../Footer/FooterContainer';
import {
  Divider,
} from '@material-ui/core';
import ErrorMessages from '../ErrorMessages/ErrorMessages';


const FooterWithIdent = () => withIndent(FooterContainer);
const ErrorMessagesWithMargin = props => withMargin(
  ErrorMessages,
  'large',
  props,
);

const Todo = ({
  count,
}) => (
  <>
    <Title titleValue={ 'TO DO:' } />
    <InputItemContainer />
    {
      count > 0 ?
        <ItemListContainer /> :
        <ErrorMessagesWithMargin errorType="empty todoList" />
    }
    <Divider />
    <FooterWithIdent />
  </>
);


export default Todo;
