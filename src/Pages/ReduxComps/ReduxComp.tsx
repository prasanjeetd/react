import React from "react";
import { connect } from "react-redux";
import { logoutAC } from "../../store/store";

const ReduxComponent = (props: any) => {
  console.log("props:", props);

  // const logOut = () => props.dispatch({type:"LOG_OUT"});

  const logOut = () => props.logOut();

  return props.loggedIn ? (
    <>
      <div>You are logged in</div>

      <button onClick={logOut}> Log Out </button>
    </>
  ) : (
    <div>Please login to view profile.</div>
  );
};

const mapDispatchToProps = {
  logOut: logoutAC,
};

const mapStateToProps = (state: any) => {
  console.log("state:", state);
  return {
    profile: state.user.profile,
    loggedIn: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
