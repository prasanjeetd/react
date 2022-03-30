import React from "react";
import { connect } from "react-redux";

const ReduxComponent = (props: any) => {
  console.log("props:", props);

  const logOut = () => props.dispatch({ type: "LOG_OUT" });

  return props.auth?.loggedIn ? (
    <>
      <div>You are logged in</div>

      <button onClick={logOut}> Log Out </button>
    </>
  ) : (
    <div>Please login to view profile.</div>
  );
};


 export default connect()(ReduxComponent);
