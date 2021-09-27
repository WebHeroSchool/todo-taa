export const EDIT_ITEM = 'EDIT_ITEM';


export const editItem = (id, value) => ({
  type: EDIT_ITEM,
  payload: {
    id,
    value,
  },
});
