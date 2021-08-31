export const FETCH_MYREPOS_ERROR = 'FETCH_ABOUT_ERROR';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const setMyReposIsError = message => ({
  type: FETCH_MYREPOS_ERROR,
  payload: message,
});

export const setContactsIsError = message => ({
  type: FETCH_CONTACTS_ERROR,
  payload: message,
});
