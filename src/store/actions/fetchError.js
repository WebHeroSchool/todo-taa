export const FETCH_MY_REPOS_ERROR = 'FETCH_MY_REPOS_ERROR';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const setMyReposIsError = message => ({
  type: FETCH_MY_REPOS_ERROR,
  payload: message,
});

export const setContactsIsError = message => ({
  type: FETCH_CONTACTS_ERROR,
  payload: message,
});
