export const SET_ABOUT_ISLOADING = 'SET_ABOUT_ISLOADING';
export const SET_CONTACTS_ISLOADING = 'SET_CONTACTS_ISLOADING';

export const setAboutIsLoading = isStatus => ({
  type: SET_ABOUT_ISLOADING,
  payload: isStatus,
});

export const setContactsIsLoading = isStatus => ({
  type: SET_CONTACTS_ISLOADING,
  payload: isStatus,
});
