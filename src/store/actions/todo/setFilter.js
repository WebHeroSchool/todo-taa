export const SET_FILTER = 'SET_FILTER';

export const setFilter = isDone => ({
  type: SET_FILTER,
  payload: isDone,
});
