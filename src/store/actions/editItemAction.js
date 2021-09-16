export const EDIT_ITEM = 'EDIT_ITEM';

export const editItem = id => ({
  type: EDIT_ITEM,
  payload: id,
});
