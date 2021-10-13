import withIndent from '../hoc/withIndent/withIndent';
import withMargin from '../hoc/withMargin/withMargin';
import withScrollBar from '../hoc/withScrollBar/withScrollBar';

import Title from '../Title/Title';
import InputItemContainer from '../InputItem/InputItemContainer';
import Filters from '../Filters/Filters';
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
const ItemListContainerWithScrollbar = props => withScrollBar(
  ItemListContainer, props);

const Todo = ({
  count,
}) => (
  <>
    <Title titleValue={ 'TO DO:' } />
    <InputItemContainer />
    <Filters />
    {
      count > 0 ?
        <ItemListContainerWithScrollbar /> :
        <ErrorMessagesWithMargin errorType="empty todoList" />
    }
    <Divider />
    <FooterWithIdent />
  </>
);


export default Todo;
