export const UPDATE_STORE = 'UPDATE_STORE';

export const updateStore = object => ({
  type: UPDATE_STORE,
  payload: [
    ...object,
  ],
});
