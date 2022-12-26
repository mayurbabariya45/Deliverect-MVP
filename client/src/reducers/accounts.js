import { ActionType } from "../actions/accounts";

const initState = {
  loading: false,
  allAccounts: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case ActionType.ACCOUNTS_LOADING:
      return {
        ...state,
        loading: true,
        allAccounts: null,
      };
    case ActionType.ACCOUNTS_SUCCESS:
      return {
        ...state,
        loading: false,
        allAccounts: action.payload,
      };
    case ActionType.ACCOUNTS_ERROR:
      return {
        ...state,
        loading: false,
        allAccounts: null,
      };
    default:
      return state;
  }
};
