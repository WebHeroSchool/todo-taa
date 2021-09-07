export const FETCH_MY_REPOS_ERROR = 'FETCH_MY_REPOS_ERROR';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const setMyReposIsError = (type, message) => ({
  type: FETCH_MY_REPOS_ERROR,
  payload: {
    type: type,
    message: message,
  },
});

export const setContactsIsError = (type, message) => ({
  type: FETCH_CONTACTS_ERROR,
  payload: {
    type: type,
    message: message,
  },
});
