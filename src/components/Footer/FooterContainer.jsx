import {
  connect,
} from 'react-redux';

import Footer from './Footer';


const FooterContainer = props => (
  <Footer
    count={ props.count }
  />
);


export default connect(
  state => ({
    count: state.todos.count,
  }),
)(FooterContainer);
