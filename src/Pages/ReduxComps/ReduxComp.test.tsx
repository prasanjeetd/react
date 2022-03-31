import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState, logoutAC, reducer } from "../../store/store";
import ReduxComp from "./ReduxComp";

const middleWares: any[] = [];
const mockStore = configureStore(middleWares);

const createState = (initialState: any) => (actions: any) =>
  actions.reduce(reducer, initialState);

describe("Testing connected component:", () => {
  let store: any;
  beforeAll(() => {
    // const is = createState({ ...initialState } );
    store = mockStore((actions: any[]) => {
      console.log("mockstore reducer", actions);

      let action = {};
      if (actions.length) {
        action = actions[0];
      }

      return reducer(initialState, action);
    });
    // store = mockStore(reducer);
    // store.replaceReducer(reducer);
  });

  afterEach(() => {
    store.clearActions();
  });

  test("Test the state and dispatch", () => {
    let state = store.getState();
    console.log("before dispatch state:", state);
    store.dispatch(logoutAC());
    const actions = store.getActions();
    const expectedPayload = { ...logoutAC() };
    expect(actions).toEqual([expectedPayload]);

    state = store.getState();
    const expectedState = {
      auth: { loggedIn: false },
      user: { profile: { name: "Redux" } },
    };
    expect(state).toStrictEqual(expectedState);
    console.log("after dispatch state:", state);
  });

  test("Test connected component", () => {
    const ConnectedComp = () => (
      <Provider store={store}>
        <ReduxComp></ReduxComp>
      </Provider>
    );
    
    // store.dispatch = jest.fn();

    const { container, getByTestId } = render(<ConnectedComp></ConnectedComp>);

    let state = store.getState();
    let expected = {
      auth: { loggedIn: true },
      user: { profile: { name: "Redux" } },
    };
    // console.log("state:", state);
    expect(state).toStrictEqual(expected);

    const logoutBtn = getByTestId("logout-btn");

    expect(logoutBtn).not.toBeNull();

    fireEvent.click(logoutBtn);

    // expect(store.dispatch).toHaveBeenCalledTimes(1);
    // expect(store.dispatch).toHaveBeenCalledWith(logoutAC());

    state = store.getState();
    expected = {
      auth: { loggedIn: false },
      user: { profile: { name: "Redux" } },
    };
    // console.log("state:", state);
    expect(state).toStrictEqual(expected);

    // expect(container).toBeNull();
  });
});
