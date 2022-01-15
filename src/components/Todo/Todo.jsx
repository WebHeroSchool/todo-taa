import {
  Suspense,
  lazy,
} from 'react';

import withIndent from '../hoc/withIndent/withIndent';
import withMargin from '../hoc/withMargin/withMargin';
import withScrollBar from '../hoc/withScrollBar/withScrollBar';


const Loader = lazy(() => import('../Loader/Loader'));
const Title = lazy(() => import('../Title/Title'));
const InputItemContainer = lazy(
  () => import('../InputItem/InputItemContainer'));
const SortContainer = lazy(() => import('../Sort/SortContainer'));
const ItemListContainer = lazy(() => import('../ItemList/ItemListContainer'));
const FooterContainer = lazy(() => import('../Footer/FooterContainer'));
const ErrorMessages = lazy(() => import('../ErrorMessages/ErrorMessages'));

const Divider = lazy(() => import('@material-ui/core/Divider'));


const FooterWithIdent = () => withIndent(FooterContainer);
const ErrorMessagesWithMargin = props => withMargin(
  ErrorMessages,
  'large',
  props,
);
const ItemListContainerWithScrollbar = props => withScrollBar(
  ItemListContainer, props,
  props.todos.items[0].filter, props.todos.items[0].id);

const Todo = ({
  count,
  ...props
}) => (
  <Suspense fallback={<Loader />}>
    <Title titleValue={ 'TO DO:' } />
    <InputItemContainer />
    {
      count > 0 ?
        <>
          <SortContainer />
          <ItemListContainerWithScrollbar { ...props } />
        </> :
        <ErrorMessagesWithMargin errorType="empty todoList" />
    }
    <Divider />
    <FooterWithIdent />
  </Suspense>
);


export default Todo;
