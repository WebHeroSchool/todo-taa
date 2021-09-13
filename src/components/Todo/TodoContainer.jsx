import {
  connect,
} from 'react-redux';

import Todo from './Todo';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';


const TodoWithIndent = props => withIndent(Todo, {
  ...props,
});
const TodoWithMyPaperLayer = props => withMyPaperLayer(TodoWithIndent, {
  ...props,
});


const TodoContainer = props => (
  <TodoWithMyPaperLayer { ...props } />
);


export default connect(
  state => ({
    count: state.todos.count,
  })
)(TodoContainer);
