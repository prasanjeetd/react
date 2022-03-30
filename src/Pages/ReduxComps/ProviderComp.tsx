import React from "react";
import { Provider } from "react-redux";
import store from "../../store/store";
import ReduxComp from "./ReduxComp";
import ReduxDefaultComp from "./ReduxDefaultComp";

export const ProviderComponent = () => {
  return (
    <div>
      Redux Provider
      <Provider store={store}>
        <ReduxContainer></ReduxContainer>
      </Provider>
    </div>
  );
};

export const ReduxContainer = () => {
  return (
    <div>
      Redux Container
      <h2> Redux with connect</h2>
      <ReduxComp></ReduxComp>
      <h2> Redux with default connect</h2>
      <ReduxDefaultComp></ReduxDefaultComp>
    </div>
  );
};
