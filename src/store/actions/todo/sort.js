export const SORT_BY = 'SORT_BY';
export const SET_SORT = 'SET_SORT';


export const sortBy = by => ({
  type: SORT_BY,
  payload: by,
});

export const setSort = value => ({
  type: SET_SORT,
  payload: value,
});
