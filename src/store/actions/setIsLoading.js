export const SET_MYREPOS_ISLOADING = 'SET_MYREPOS_ISLOADING';
export const SET_CONTACTS_ISLOADING = 'SET_CONTACTS_ISLOADING';

export const setMyReposIsLoading = isStatus => ({
  type: SET_MYREPOS_ISLOADING,
  payload: isStatus,
});

export const setContactsIsLoading = isStatus => ({
  type: SET_CONTACTS_ISLOADING,
  payload: isStatus,
});
