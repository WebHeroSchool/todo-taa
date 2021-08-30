export const UPDATE_MYREPOS_STORE = 'UPDATE_MYREPOS_STORE';
export const UPDATE_CONTACTS_STORE = 'UPDATE_CONTACTS_STORE';

export const updateMyReposStore = object => ({
  type: UPDATE_MYREPOS_STORE,
  payload: object,
});


export const updateContactsStore = object => ({
  type: UPDATE_CONTACTS_STORE,
  payload: {
    ...object,
  },
});
