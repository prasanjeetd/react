import { createStore } from "redux";

const initialState = {
  auth: { loggedIn: true },
  user: { profile: {name:"Redux"}}
};

//should it be a reducer
const store = createStore((state: any = initialState, action) => {
  switch (action.type) {
    case "LOG_IN":
      return { ...state, auth: { loggedIn: true } };
    case "LOG_OUT":
      return { ...state, auth: { loggedIn: false } };
    default:
      return state;
  }
});

export const logoutAC =() => ({ type: "LOG_OUT" });

export default store;