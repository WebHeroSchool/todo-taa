export const SET_ALL_FILTER = 'SET_ALL_FILTER';
export const SET_ACTIVE_FILTER = 'SET_ACTIVE_FILTER';
export const SET_COMPLITED_FILTER = 'SET_COMPLITED_FILTER';
export const ON_CLEAR_COMPLETED = 'ON_CLEAR_COMPLETED';


export const setAllFilter = () => ({
  type: SET_ALL_FILTER,
  payload: 'all',
});


export const setActiveFilter = () => ({
  type: SET_ACTIVE_FILTER,
  payload: 'active',
});


export const setComplitedFilter = () => ({
  type: SET_COMPLITED_FILTER,
  payload: 'complite',
});

export const onClearCompleted = () => ({
  type: ON_CLEAR_COMPLETED,
});
