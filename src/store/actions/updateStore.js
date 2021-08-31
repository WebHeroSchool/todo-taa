export const UPDATE_MY_REPOS_STORE = 'UPDATE_MY_REPOS_STORE';
export const UPDATE_CONTACTS_STORE = 'UPDATE_CONTACTS_STORE';

export const updateMyReposStore = object => ({
  type: UPDATE_MY_REPOS_STORE,
  payload: object,
});


export const updateContactsStore = object => ({
  type: UPDATE_CONTACTS_STORE,
  payload: {
    ...object,
  },
});
