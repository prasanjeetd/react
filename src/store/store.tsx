import { createStore } from "redux";

export const initialState = {
  auth: { loggedIn: true },
  user: { profile: { name: "Redux" } },
};

export const reducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, auth: { loggedIn: true } };
    case "LOG_OUT":
      return { ...state, auth: { loggedIn: false } };
    default:
      return state;
  }
};

//should it be a reducer
const store = createStore(reducer);

export const logoutAC = () => ({ type: "LOG_OUT" });

export default store;
