import {
  connect,
} from 'react-redux';

import {
  onClearCompleted,
} from '../../store/actions/todo/setFilters';

import Footer from './Footer';


const FooterContainer = props => (
  <Footer
    count={ props.count } {...props}
  />
);


export default connect(
  state => ({
    count: state.todos.count,
  }),
  {
    onClearCompleted,
  },
)(FooterContainer);
