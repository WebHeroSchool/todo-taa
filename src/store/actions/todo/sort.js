export const SORT = 'SORT';


export const sortBy = by => ({
  type: SORT,
  payload: by,
});
