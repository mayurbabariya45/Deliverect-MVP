import { connect } from "react-redux";
import { Actions } from "../actions/accounts";
import Dashboard from "../views/Dashboard";

const mapStateToProps = (state) => ({
  loading: state.accounts.loading,
  linkedAccounts: state.accounts.allAccounts,
});

const mapDispatchToProps = (dispatch) => ({
  getAllLinkedAccount: () => dispatch(Actions.allAccounts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
