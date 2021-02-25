import React from 'react';
// import {
//   connect,
// } from 'react-redux';

const mockItems = [
  {
    value: 'погулять',
    isDone: false,
    id: 8,
  },
];

const withStore = WrappedComponent => props => (
  <div >
    Это ХОК
    <WrappedComponent items={mockItems} {...props} />
  </div>
);
export default withStore;
