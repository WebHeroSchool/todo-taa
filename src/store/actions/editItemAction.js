export const EDIT_ITEM = 'EDIT_ITEM';

export const editItem = (id, value, save) => ({
  type: EDIT_ITEM,
  payload: {
    id,
    value,
    save,
  },
});
