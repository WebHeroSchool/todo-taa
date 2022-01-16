import {
  Suspense,
  lazy,
} from 'react';

import Helmet from 'react-helmet';

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

const meta = {
  title: 'ToDo App',
  description: 'Веб-приложение - список дел',
  image: {
    url: 'https://webheroschool.github.io/todo-taa/toDoApp.png',
    alt: 'ToDo App',
    width: '1200',
    height: '846',
  },
  url: 'https://webheroschool.github.io/todo-taa/#/todo',
  type: 'website',
  id: '488242212639151',
};


const Todo = ({
  count,
  ...props
}) => (
  <>
    <Helmet>
      <title>{ meta.title }</title>
      <meta name="description" content={ meta.description }/>
      <meta property="og:title" content={ meta.title }/>
      <meta property="og:image" content={ meta.image.url }/>
      <meta property="og:image:alt" content={ meta.image.alt }/>
      <meta property="og:image:width" content={ meta.image.width }/>
      <meta property="og:image:height" content={ meta.image.height }/>
      <meta property="og:url" content={ meta.url } />
      <meta property="og:type" content={ meta.type } />
      <meta property="og:description" content={ meta.description } />
      <meta property="fb:app_id" content={ meta.id } />
    </Helmet>
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
  </>
);


export default Todo;
