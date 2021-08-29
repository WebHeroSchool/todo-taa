export const FETCH_ABOUT_ERROR = 'FETCH_ABOUT_ERROR';
export const FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR';

export const setAboutIsError = message => ({
  type: FETCH_ABOUT_ERROR,
  payload: message,
});

export const setContactsIsError = message => ({
  type: FETCH_CONTACTS_ERROR,
  payload: message,
});
