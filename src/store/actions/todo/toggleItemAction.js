export const TOGGLE_ITEM = 'TOGGLE_ITEM';

export const toggleItem = id => ({
  type: TOGGLE_ITEM,
  payload: id,
});
