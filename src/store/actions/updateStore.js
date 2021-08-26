export const UPDATE_ABOUT_STORE = 'UPDATE_ABOUT_STORE';
export const UPDATE_CONTACTS_STORE = 'UPDATE_CONTACTS_STORE';

export const updateAboutStore = object => ({
  type: UPDATE_ABOUT_STORE,
  payload: object,
});


export const updateContactsStore = object => ({
  type: UPDATE_CONTACTS_STORE,
  payload: {
    ...object,
  },
});
