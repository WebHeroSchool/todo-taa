// import React from 'react';
import {
  connect,
} from 'react-redux';
import todosActions from '../../store/actions/todosActions';


// const mockItems = [
//   {
//     value: 'погулять',
//     isDone: false,
//     id: 8,
//   },
// ];


const withOnClickIsDone = WrappedComponent => connect(
  null,
  todosActions,
)(WrappedComponent);

export default withOnClickIsDone;
