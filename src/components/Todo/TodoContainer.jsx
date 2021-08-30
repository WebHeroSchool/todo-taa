import Todo from './Todo';
import withMyPaperLayer from '../hoc/withMyPaperLayer/withMyPaperLayer';
import withIndent from '../hoc/withIndent/withIndent';


const TodoWithIndent = props => withIndent(Todo, {
  ...props,
});
const TodoWithMyPaperLayer = props => withMyPaperLayer(TodoWithIndent, {
  ...props,
});


const TodoContainer = () => (
  <TodoWithMyPaperLayer />
);


export default TodoContainer;
