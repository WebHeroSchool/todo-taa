export const SET_ALL_FILTER = 'SET_ALL_FILTER';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const SET_COMPLETED_FILTER = 'SET_COMPLETED_FILTER';
export const ON_CLEAR_COMPLETED = 'ON_CLEAR_COMPLETED';
export const SET_ORDER_ITEMS = 'SET_ORDER_ITEMS';


export const setAllFilter = () => ({
  type: SET_ALL_FILTER,
  payload: 'all',
});


export const setActiveFilter = () => ({
  type: SET_ACTIVE_FILTER,
  payload: 'active',
});


export const setCompletedFilter = () => ({
  type: SET_COMPLETED_FILTER,
  payload: 'complete',
});

export const onClearCompleted = () => ({
  type: ON_CLEAR_COMPLETED,
});

export const setOrderItems = (orderOfDrag, orderOfCover) => ({
  type: SET_ORDER_ITEMS,
  payload: {
    orderOfDrag,
    orderOfCover,
  },
});
