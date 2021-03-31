import {
  connect,
} from 'react-redux';
import createItem from '../../store/actions/createItem';

import InputItem from './InputItem';


const InputItemContainer = props => (
  <InputItem createItem={ props.createItem } />
);


export default connect(null,
  {
    createItem,
  },
)(InputItemContainer);
