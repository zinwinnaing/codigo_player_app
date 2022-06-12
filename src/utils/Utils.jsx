export const slice = (thunk) => {
  return {
    [thunk.pending]: (state) => {
      return {
        ...state,
        isPending: true,
      };
    },
    [thunk.rejected]: (state) => {
      return {
        ...state,
        isPending: false,
        hasError: true,
      };
    },
    [thunk.fulfilled]: (state, action) => {
      return {
        ...state,
        hasError: false,
        isPending: false,
        data: action?.payload?.data,
      };
    },
  };
};

export const initialiseSelector = (reducer) => {
  if (reducer) {
    const { data = {}, isPending, meta = {} } = reducer;
    const selectedData = {
      data,
      isPending,
      paginations: meta.paginations,
    };
    return selectedData;
  }
  return {
    data: {},
    isPending: true,
    hasError: false,
  };
};
