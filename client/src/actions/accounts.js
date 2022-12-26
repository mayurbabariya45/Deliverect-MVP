import { getAllLinkedAccount } from "../api";

export const ActionType = {
  ACCOUNTS: "ACCOUNTS",
  ACCOUNTS_LOADING: "ACCOUNTS_LOADING",
  ACCOUNTS_SUCCESS: "ACCOUNTS_SUCCESS",
  ACCOUNTS_ERROR: "ACCOUNTS_ERROR",
};

export const Actions = {
  allAccounts: (filter) => {
    return {
      type: ActionType.ACCOUNTS,
      payload: getAllLinkedAccount(filter),
    };
  },
};
