const initNoticesData = {
  notices: Array(4)
    .fill()
    .map(() => ({
      data: [],
      nextPage: null,
      allFetched: false
    })),
  isFetching: false
};

export var noticesReducer = (state = initNoticesData, action) => {
  switch (action.type) {
    case "UPDATE_NOTICES":
      return { ...state, notices: action.value };
    case "SET_FETCHING_NOTICES":
      return { ...state, isFetching: action.value };
    default:
      return state;
  }
};
