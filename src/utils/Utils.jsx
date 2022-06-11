export const slice = (thunk, identifier) => {
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
        data: action.payload.data,
        meta: action.payload.meta,
      };

      // eslint-disable-next-line no-console
      console.error(
        "Invalid payload type, cannot reduce by identifier",
        action.payload
      );
      return state;
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
