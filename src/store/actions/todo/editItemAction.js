export const EDIT_ITEM = 'EDIT_ITEM';
export const SET_IS_WRONG_VALUE = 'SET_IS_WRONG_VALUE';


export const editItem = (id, value) => ({
  type: EDIT_ITEM,
  payload: {
    id,
    value,
  },
});

export const setIsWrongValue = id => ({
  type: SET_IS_WRONG_VALUE,
  payload: {
    id,
  },
});
