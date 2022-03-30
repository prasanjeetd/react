import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { initialState, logoutAC } from "../../store/store";
import ReduxComp from "./ReduxComp";
import ReduxDefaultComp from "./ReduxDefaultComp";

const middleWares: any[] = [];
const mockStore = configureStore(middleWares);

describe("Testing connected component:", () => {
  let store: any;
  beforeAll(() => {
    store = mockStore(initialState);
  });

  test("Test the state and dispatch", () => {
    let state = store.getState();
    console.log("state:", state);
    store.dispatch(logoutAC());
    const actions = store.getActions();
    const expectedPayload = { ...logoutAC() };
    expect(actions).toEqual([expectedPayload]);

    state = store.getState();
    console.log("state:", state);
  });

  test("Test connected component", () => {
    const ConnectedComp = () => (
      <Provider store={store}>
        <ReduxComp></ReduxComp>
      </Provider>
    );

    store.dispatch = jest.fn();

    const { container, getByTestId } = render(<ConnectedComp></ConnectedComp>);

    let state = store.getState();
    console.log("state:", state);

    const logoutBtn = getByTestId("logout-btn");

    expect(logoutBtn).not.toBeNull();

    fireEvent.click(logoutBtn);
    // expect(container).toBeNull();

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(logoutAC());
  });
});
